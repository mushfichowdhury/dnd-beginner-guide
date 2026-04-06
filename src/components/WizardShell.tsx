"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import FlowchartWizard from "./FlowchartWizard";
import MobileWizard from "./MobileWizard";

export default function WizardShell() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileWizard />;
  }

  return <FlowchartWizard />;
}
