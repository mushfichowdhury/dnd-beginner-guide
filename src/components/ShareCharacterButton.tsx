"use client";
import { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import type { Edition, DndClass, Subclass } from "@/types";

interface ShareCharacterButtonProps {
  edition: Edition;
  raceName: string;
  variantName?: string;
  subVariantName?: string;
  dndClassName: string;
  subclassName: string;
  characterName?: string | null;
  classData?: DndClass;
  subclassData?: Subclass;
}

type ShareStatus = "idle" | "sharing" | "shared" | "downloaded" | "failed";

const CARD_STYLE = {
  background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
  borderRadius: 16,
  border: "1px solid rgba(99, 102, 241, 0.3)",
  boxShadow: "0 0 40px rgba(99, 102, 241, 0.15), 0 4px 24px rgba(0, 0, 0, 0.4)",
  fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
  color: "#f3f4f6",
} as const;

const DIVIDER_STYLE = {
  height: 1,
  background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
  margin: "14px 0",
} as const;

export default function ShareCharacterButton({
  edition,
  raceName,
  variantName,
  subVariantName,
  dndClassName,
  subclassName,
  characterName,
  classData,
  subclassData,
}: ShareCharacterButtonProps) {
  const [status, setStatus] = useState<ShareStatus>("idle");
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const raceLabel = edition === "5.5e" ? "Species" : "Race";
  const editionLabel = edition === "5e" ? "5th Edition (2014)" : "5.5e Revised (2024)";

  const raceDisplay = (() => {
    let text = raceName;
    if (variantName) {
      text += ` (${variantName}${subVariantName ? ` — ${subVariantName}` : ""})`;
    }
    return text;
  })();

  const handleShare = useCallback(async () => {
    if (!cardRef.current || status === "sharing") return;
    setStatus("sharing");

    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );

      if (!blob) {
        setStatus("failed");
        return;
      }

      const file = new File([blob], "dnd-character.png", { type: "image/png" });

      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({
            title: characterName || "My D&D Character",
            files: [file],
          });
          setStatus("shared");
        } catch (err) {
          if (err instanceof Error && err.name === "AbortError") {
            setStatus("idle");
            return;
          }
          downloadBlob(blob);
          setStatus("downloaded");
        }
      } else {
        downloadBlob(blob);
        setStatus("downloaded");
      }
    } catch {
      setStatus("failed");
    }

    setTimeout(() => setStatus("idle"), 2000);
  }, [status, characterName]);

  const downloadBlob = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dnd-character.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const buttonLabel = {
    idle: "Share Character",
    sharing: "Generating...",
    shared: "Shared!",
    downloaded: "Downloaded!",
    failed: "Failed — try again",
  }[status];

  const canShowDetails = !!(classData && subclassData);
  const isDetailed = showDetails && canShowDetails;

  const skillsText = (() => {
    if (!classData) return "";
    const { choose, from } = classData.proficiencies.skills;
    const list = from.length > 6 ? from.slice(0, 5).join(", ") + ", ..." : from.join(", ");
    return `Choose ${choose}: ${list}`;
  })();

  return (
    <>
      {/* Hidden card for html2canvas capture */}
      <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
        <div
          ref={cardRef}
          style={{
            ...CARD_STYLE,
            width: isDetailed ? 450 : 440,
            padding: isDetailed ? "26px 22px" : "32px 28px",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: isDetailed ? 12 : 20, textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: "#818cf8", marginBottom: 6 }}>
              D&D Character
            </div>
            <div style={{ fontSize: isDetailed ? 24 : 28, fontWeight: 700, color: "#ffffff", textShadow: "0 0 15px rgba(255,255,255,0.2), 0 1px 3px rgba(0,0,0,0.8)" }}>
              {characterName || "Unnamed Hero"}
            </div>
          </div>

          <div style={DIVIDER_STYLE} />

          {/* Stats */}
          {isDetailed ? (
            <div style={{ display: "flex", gap: 0 }}>
              <div style={{ flex: 1, textAlign: "center", padding: "0 8px" }}>
                <div style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: "#9ca3af", marginBottom: 3 }}>{raceLabel}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#ffffff" }}>{raceDisplay}</div>
              </div>
              <div style={{ width: 1, background: "rgba(99,102,241,0.25)" }} />
              <div style={{ flex: 1, textAlign: "center", padding: "0 8px" }}>
                <div style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: "#9ca3af", marginBottom: 3 }}>Class</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#ffffff" }}>{dndClassName}</div>
              </div>
              <div style={{ width: 1, background: "rgba(99,102,241,0.25)" }} />
              <div style={{ flex: 1, textAlign: "center", padding: "0 8px" }}>
                <div style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: "#9ca3af", marginBottom: 3 }}>Subclass</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#ffffff" }}>{subclassName}</div>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <CardRow label={raceLabel} value={raceDisplay} />
              <CardRow label="Class" value={dndClassName} />
              <CardRow label="Subclass" value={subclassName} />
            </div>
          )}

          {/* Detailed extra sections */}
          {isDetailed && classData && subclassData && (
            <>
              {/* Class Details */}
              <div style={DIVIDER_STYLE} />
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#818cf8", marginBottom: 8 }}>
                  Class Details
                </div>
                <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                  <div style={{ flex: 1, background: "rgba(99,102,241,0.1)", borderRadius: 8, padding: "7px 8px", textAlign: "center" }}>
                    <div style={{ fontSize: 8, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Hit Die</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "#a5b4fc" }}>{classData.hitDie}</div>
                  </div>
                  <div style={{ flex: 2, background: "rgba(99,102,241,0.1)", borderRadius: 8, padding: "7px 8px", textAlign: "center" }}>
                    <div style={{ fontSize: 8, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Primary Ability</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#a5b4fc" }}>{classData.primaryAbility}</div>
                  </div>
                  <div style={{ flex: 2, background: "rgba(99,102,241,0.1)", borderRadius: 8, padding: "7px 8px", textAlign: "center" }}>
                    <div style={{ fontSize: 8, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Role</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#a5b4fc", lineHeight: 1.3 }}>{classData.role}</div>
                  </div>
                </div>
              </div>

              {/* Proficiencies */}
              <div style={DIVIDER_STYLE} />
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#818cf8", marginBottom: 8 }}>
                  Proficiencies
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <ProfRow label="Saving Throws" value={classData.proficiencies.savingThrows.join(", ")} />
                  {classData.proficiencies.armor.length > 0 && (
                    <ProfRow label="Armor" value={classData.proficiencies.armor.join(", ")} />
                  )}
                  <ProfRow label="Weapons" value={classData.proficiencies.weapons.join(", ")} />
                  <ProfRow label="Skills" value={skillsText} />
                </div>
              </div>

              {/* Subclass Details */}
              <div style={DIVIDER_STYLE} />
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#818cf8", marginBottom: 6 }}>
                  Subclass Details
                </div>
                <div style={{ fontSize: 11, color: "#d1d5db", lineHeight: 1.55 }}>
                  {subclassData.synopsis}
                </div>
              </div>
            </>
          )}

          {/* Edition badge */}
          <div style={{ marginTop: isDetailed ? 14 : 20, display: "flex", justifyContent: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: "#a5b4fc", background: "rgba(99,102,241,0.15)", padding: "4px 12px", borderRadius: 20, border: "1px solid rgba(99,102,241,0.2)", textAlign: "center" }}>
              {editionLabel}
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: isDetailed ? 10 : 20, textAlign: "center", fontSize: 10, color: "#6b7280", letterSpacing: 0.5 }}>
            Built with D&D Character Creator
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-3">
        {canShowDetails && (
          <div className="flex overflow-hidden rounded-lg border border-white/20 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setShowDetails(false)}
              className={`px-4 py-1.5 transition-colors ${
                !showDetails ? "bg-indigo-600 text-white" : "bg-transparent text-white/50 hover:bg-white/10"
              }`}
            >
              Basic
            </button>
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className={`px-4 py-1.5 transition-colors ${
                showDetails ? "bg-indigo-600 text-white" : "bg-transparent text-white/50 hover:bg-white/10"
              }`}
            >
              Detailed
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={handleShare}
          disabled={status === "sharing"}
          className={`flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-heading font-semibold text-white transition-all ${
            status === "shared" || status === "downloaded"
              ? "bg-gradient-to-r from-emerald-600 to-green-600"
              : status === "failed"
                ? "bg-gradient-to-r from-red-600 to-rose-600"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          } disabled:opacity-60`}
          aria-live="polite"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          <span>{buttonLabel}</span>
        </button>
      </div>
    </>
  );
}

function CardRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: "#9ca3af", marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#ffffff" }}>
        {value}
      </div>
    </div>
  );
}

function ProfRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
      <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#818cf8", minWidth: 74, paddingTop: 1, flexShrink: 0 }}>
        {label}
      </div>
      <div style={{ fontSize: 11, color: "#d1d5db", flex: 1, lineHeight: 1.45 }}>
        {value}
      </div>
    </div>
  );
}
