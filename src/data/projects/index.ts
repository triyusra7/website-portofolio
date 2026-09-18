import type { Project } from "./types";
import { tangkianErp } from "./tangkian-erp";
import { tangkianLogistics } from "./tangkian-logistics";
import { repo } from "./repo";
import { marketplace } from "./marketplace";
import { invoicing } from "./invoicing";
import { designSystem } from "./design-system";
import { rekamWilayah } from "./rekam-wilayah";
import { lampuKuning } from "./lampu-kuning";
import { wasnack } from "./wasnack";
import { hylo } from "./hylo";
import { litup } from "./litup";
import { biotalk } from "./biotalk";
import { pcc } from "./pcc";
import { myCollection } from "./my-collection";

export type {
  Feature,
  CaseStudyImage,
  CaseStudyListItem,
  CaseStudyTable,
  CaseStudyStat,
  CaseStudySection,
  Project,
} from "./types";

/** Top 6 core product design case studies featured on the home page. */
export const featuredProjects: readonly Project[] = [
  tangkianErp,
  repo,
  marketplace,
  invoicing,
  designSystem,
  rekamWilayah,
];

/** Secondary work (branding, visual design, social media, early projects) moved to /other-work. */
export const otherProjects: readonly Project[] = [
  lampuKuning,
  wasnack,
  hylo,
  litup,
  biotalk,
  pcc,
  myCollection,
];

/** All projects for routing, static paths, and full archive lookup. */
export const projects: readonly Project[] = [
  tangkianErp,
  repo,
  marketplace,
  invoicing,
  designSystem,
  rekamWilayah,
  tangkianLogistics,
  lampuKuning,
  wasnack,
  hylo,
  litup,
  biotalk,
  pcc,
  myCollection,
];

