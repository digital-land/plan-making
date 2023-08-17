export const loadJson = async (filepath: string) =>
  await fetch(filepath).then((res) => res.json());

export const loadCSV = async (filepath: string) =>
  await fetch(filepath).then((res) => res.text());
