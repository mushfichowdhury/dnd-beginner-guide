import { raceNames, type RaceNameData } from "@/data/names";

export type NameMode = "full" | "title" | "letter";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getNameData(raceId: string): RaceNameData {
  return raceNames[raceId] ?? raceNames["human"];
}

export function generateNames(
  raceId: string,
  mode: NameMode,
  count: number,
  startingLetter?: string
): string[] {
  const data = getNameData(raceId);
  const results: string[] = [];
  const maxAttempts = count * 10;
  let attempts = 0;

  while (results.length < count && attempts < maxAttempts) {
    attempts++;
    let name: string;

    switch (mode) {
      case "full": {
        const first = pickRandom(data.firstNames);
        const last = pickRandom(data.surnames);
        name = `${first} ${last}`;
        break;
      }
      case "title": {
        const first = pickRandom(data.firstNames);
        const title = pickRandom(data.titles);
        name = `${first} ${title}`;
        break;
      }
      case "letter": {
        const letter = (startingLetter ?? "a").toLowerCase();
        let filtered = data.firstNames.filter(
          (n) => n.toLowerCase().startsWith(letter)
        );
        if (filtered.length === 0) {
          filtered = data.firstNames;
        }
        const first = pickRandom(filtered);
        const last = pickRandom(data.surnames);
        name = `${first} ${last}`;
        break;
      }
    }

    if (!results.includes(name)) {
      results.push(name);
    }
  }

  // If we couldn't get enough unique names, fill remaining slots allowing duplicates
  while (results.length < count) {
    switch (mode) {
      case "full":
      case "letter": {
        const first = pickRandom(data.firstNames);
        const last = pickRandom(data.surnames);
        results.push(`${first} ${last}`);
        break;
      }
      case "title": {
        const first = pickRandom(data.firstNames);
        const title = pickRandom(data.titles);
        results.push(`${first} ${title}`);
        break;
      }
    }
  }

  return results;
}
