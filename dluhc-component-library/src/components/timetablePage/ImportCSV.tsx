import { useState, useEffect } from "react";
import Papa from "papaparse";
import csv from "./";

export const ImportCSV = () => {
  console.log("being called");
  // const fs = require("fs");
  // const csv = fs.readFileSync("../../../../csv-headers.csv");
  // console.log(csv);

  Papa.parse(csvHeaders);
};
