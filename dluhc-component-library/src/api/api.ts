import WKT from "ol/format/WKT.js";
import { Geometry } from "ol/geom";

export async function fetchDataset(geometry: Geometry) {
  const format = new WKT();
  const polygon = format.writeGeometry(geometry);

  const promise = await fetch(
    `https://www.planning.data.gov.uk/entity.geojson?limit=100&geometry=${polygon}`,
  );
  return await promise.json();
}
