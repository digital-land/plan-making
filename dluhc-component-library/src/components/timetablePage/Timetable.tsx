import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columnDefinitions } from "./columnDefinitions";
import { RowData } from "./types";

import "./Timetable.css";

interface StagesProps {
  data?: RowData[];
}

const Timetable = ({ data }: StagesProps) => {
  const table = useReactTable({
    data: data ?? [],
    columns: columnDefinitions,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="px-4">
      <table className="w-full text-sm text-left px-4">
        <thead className="capitalise text-left font-bold border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-3">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <>
              <tr key={row.id} className="bg-white">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="pt-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <div className="pt-1 pb-3">
                  <span className="text-blue-400 underline">
                    More information
                  </span>
                </div>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
