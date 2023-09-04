import { Geometry, Polygon } from "ol/geom";
import RenderFeature from "ol/render/Feature";

export const isPolygon = (
  polygon: Geometry | RenderFeature | undefined,
): polygon is Polygon => polygon?.getType() === "Polygon";
