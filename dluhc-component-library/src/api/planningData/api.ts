import { useQuery } from "@tanstack/react-query";
import { FeatureCollection } from "geojson";
import WKT from "ol/format/WKT.js";
import { Geometry } from "ol/geom";
import { Dataset, DatasetError, DatasetResponse } from "./types";

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

export const useFetchDatasets = () =>
  useQuery<DatasetResponse, DatasetError, Dataset[]>(
    ["datasets"],
    () => fetch(`${baseURL}/dataset.json`).then((response) => response.json()),
    {
      select: (data) =>
        data.datasets.sort((a, b) => a.name.localeCompare(b.name)),
    },
  );

const fetchEntities: (
  geometry?: Geometry,
  dataset?: string,
) => Promise<FeatureCollection> = async (geometry, dataset) => {
  if (!geometry) {
    return { features: [] };
  }

  const format = new WKT();
  const polygon = format.writeGeometry(geometry);

  let datasetQuery = dataset ? `&dataset=${dataset}` : "";

  return await fetch(
    `${baseURL}/entity.geojson?limit=100&geometry=${polygon}${datasetQuery}&geometry_relation=intersects`,
  ).then((Response) => {
    return Response.json();
  });
};

export const useFetchEntities = (
  geometry: Geometry | undefined,
  dataset?: string,
) =>
  useQuery(["entities", dataset, geometry], () =>
    fetchEntities(geometry, dataset),
  );
