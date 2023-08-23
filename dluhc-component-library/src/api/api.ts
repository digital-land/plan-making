import WKT from "ol/format/WKT.js";
import { Geometry } from "ol/geom";
import { DatasetResponse } from "src/api/types";

const baseURL = "https://www.planning.data.gov.uk";

export const fetchDataset = async (geometry: Geometry) => {
  const format = new WKT();
  const polygon = format.writeGeometry(geometry);

  return await fetch(
    `${baseURL}/entity.geojson?limit=100&geometry=${polygon}`,
  ).then((Response) => {
    return Response.json();
  });
};

export const fetchDatasetList: () => Promise<DatasetResponse> = async () =>
  fetch(`${baseURL}/dataset.json`).then((response) => response.json());
