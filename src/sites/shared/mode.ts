export type SiteMode = "professional" | "creative";

export const MODE_STORAGE_KEY = "portfolio-mode";

export function isSiteMode(value: string | null | undefined): value is SiteMode {
  return value === "professional" || value === "creative";
}

/** Map legacy saved values from older builds. */
export function normalizeStoredMode(raw: string | null | undefined): SiteMode | null {
  if (isSiteMode(raw)) return raw;
  if (raw === "analyst") return "professional";
  if (raw === "studio") return "creative";
  return null;
}
