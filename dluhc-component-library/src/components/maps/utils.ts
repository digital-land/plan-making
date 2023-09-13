import { Geometry, Polygon } from "ol/geom";
import RenderFeature from "ol/render/Feature";
import { Boundary } from "./types";
import Feature from "ol/Feature";

export const isPolygon = (
  polygon: Geometry | RenderFeature | undefined,
): polygon is Polygon => polygon?.getType() === "Polygon";

export const boundaryToFeature = (boundaries: Boundary[]) => {
  return boundaries.map((boundary: Boundary) => {
    return new Feature({ geometry: new Polygon(boundary as number[][][]) });
  });
};
