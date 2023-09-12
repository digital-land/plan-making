import { createColumnHelper } from "@tanstack/table-core";
import { Stage } from "src/models/timetable/types";
import ProgressTile from "./ProgressTile";

const columnHelper = createColumnHelper<Stage>();

export const columnDefinitions = [
  columnHelper.accessor("name", {
    cell: (data) => <span className="font-bold">{data.getValue()}</span>,
    header: () => <span>Stage</span>,
  }),
  columnHelper.accessor("startDate", {
    cell: (data) => data.getValue(),
    header: () => <span>Start Date</span>,
  }),
  columnHelper.accessor("endDate", {
    cell: (data) => data.getValue(),
    header: () => <span>End Date</span>,
  }),
  columnHelper.accessor("progress", {
    cell: (data) => <ProgressTile progress={data.getValue()} />,
    header: () => <span>Progress</span>,
  }),
];
