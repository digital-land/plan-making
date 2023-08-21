export async function fetchDataset(coordinates: any[][]) {
  const points = coordinates[0]
    .map((point: any[]) => `${point[0]} ${point[1]}`)
    .join(", ");
  const polygon = `POLYGON((${points}))`;
  const promise = await fetch(
    `https://www.planning.data.gov.uk/entity.geojson?limit=100&geometry=${polygon}`,
  );
  return await promise.json();
}
