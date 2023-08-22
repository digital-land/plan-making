import WKT from "ol/format/WKT.js";
import { Geometry } from "ol/geom";

export async function fetchDataset(geometry: Geometry) {
  const format = new WKT();
  const polygon = format.writeGeometry(geometry);

  return await fetch(
    `https://www.planning.data.gov.uk/entity.geojson?limit=100&geometry=${polygon}`,
  ).then((Response) => {
    return Response.json();
  });
}
