export function normalizeHslColorToTailwind(hsl: string): string {
  const [h, s, l] = hsl
    .replace("hsl(", "")
    .replace(")", "")
    .split(",")
    .map((x) => x.trim());

  return `hsl(${h}_${s}_${l})`;
}
