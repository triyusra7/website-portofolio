export type Feature = {
  title: string;
  description: string;
  image?: string;
};

export type CaseStudyImage = {
  label: string;
  src?: string;
  /** Rendered as a <figcaption> under the image. */
  caption?: string;
  /** Intrinsic size of the source file, keeping layout shift at zero. */
  width?: number;
  height?: number;
  /** Diagrams carry their own background; skip the screenshot frame. */
  frame?: boolean;
};

/** A titled item inside a numbered list (Problem backgrounds, Goals, …). */
export type CaseStudyListItem = {
  title: string;
  body: string;
};

export type CaseStudyTable = {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  caption?: string;
};

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  title: string;
  body?: string;
  items?: readonly CaseStudyListItem[];
  table?: CaseStudyTable;
  /** Small muted line (disclaimers, source notes) shown before the images. */
  note?: string;
  images?: readonly CaseStudyImage[];
  /** Force one image per row: use for wide screenshots. Defaults to 2 when there are several. */
  imageColumns?: 1 | 2;
};

export type Project = {
  id: string;
  title: string;
  company: string;
  projectType: string;
  category: string;
  year: string;
  cover: string | null;
  tags: readonly string[];
  gradient: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  features: readonly Feature[];
  // Optional rich case study fields
  flowImage?: string;
  flowProcessImages?: readonly string[];
  resultImage?: string;
  bannerImages?: readonly string[];   // up to 3 full-width dark section-divider banners
  desktopFeatures?: boolean;          // render feature images as desktop (no phone frame)
  caseStudySections?: readonly CaseStudySection[];
  /** Figures shown above the result block. */
  resultStats?: readonly CaseStudyStat[];
  /** Muted line under the result block (sample-data disclaimers, credits). */
  resultNote?: string;
  /** Social card image; falls back to `cover`. */
  ogImage?: string;
  /** Homepage grid image when `cover` is too bright for the overlaid title. Falls back to `cover`. */
  thumbnail?: string;
};
