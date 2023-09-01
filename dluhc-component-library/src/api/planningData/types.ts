export interface DatasetResponse {
  datasets: Dataset[];
}

export interface Dataset {
  dataset: string;
  name: string;
  "entity-count": number;
  "paint-options": PaintOptions | "";
}

export type DatasetError = unknown;

export interface PaintOptions {
  colour: string;
  opacity?: number;
}
