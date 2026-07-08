export type Feature = {
  title: string;
  description: string;
  image?: string;
};

export type CaseStudyImage = {
  label: string;
  src?: string;
};

export type CaseStudySection = {
  title: string;
  body?: string;
  images?: readonly CaseStudyImage[];
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
};
