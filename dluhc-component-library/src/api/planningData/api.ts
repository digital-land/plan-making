import { useQuery } from "@tanstack/react-query";
import { FeatureCollection } from "geojson";
import WKT from "ol/format/WKT.js";
import { Geometry } from "ol/geom";
import { Dataset, DatasetResponse } from "./types";

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
  useQuery<DatasetResponse, unknown, Dataset[]>(
    ["datasets"],
    () => fetch(`${baseURL}/dataset.json`).then((response) => response.json()),
    {
      select: (data) =>
        data.datasets.sort((a, b) => a.name.localeCompare(b.name)),
    },
  );

export const fetchEntities: (
  dataset: string,
  geometry: Geometry,
) => Promise<FeatureCollection> = async (dataset, geometry) => {
  const format = new WKT();
  const polygon = format.writeGeometry(geometry);

  return await fetch(
    `${baseURL}/entity.geojson?limit=100&geometry=${polygon}&dataset=${dataset}&geometry_relation=intersects`,
  ).then((Response) => {
    return Response.json();
  });
};

export const useFetchEntities = (dataset: string, geometry: Geometry) =>
  useQuery(["entities", dataset, geometry], () =>
    fetchEntities(dataset, geometry),
  );
