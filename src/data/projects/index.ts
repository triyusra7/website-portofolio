import type { Project } from "./types";
import { marketplace } from "./marketplace";
import { repo } from "./repo";
import { rekamWilayah } from "./rekam-wilayah";
import { invoicing } from "./invoicing";
import { designSystem } from "./design-system";
import { lampuKuning } from "./lampu-kuning";
import { wasnack } from "./wasnack";
import { hylo } from "./hylo";
import { litup } from "./litup";
import { biotalk } from "./biotalk";
import { pcc } from "./pcc";
import { myCollection } from "./my-collection";

export type { Feature, CaseStudyImage, CaseStudySection, Project } from "./types";

export const projects: readonly Project[] = [
  marketplace,
  repo,
  rekamWilayah,
  invoicing,
  designSystem,
  lampuKuning,
  wasnack,
  hylo,
  litup,
  biotalk,
  pcc,
  myCollection,
];
