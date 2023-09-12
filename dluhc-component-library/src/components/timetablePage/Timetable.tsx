import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Stage } from "src/models/timetable/types";
import { AccordionDropdown } from "src/components/formComponents";
import { columnDefinitions } from "./columnDefinitions";

import "./Timetable.css";

interface StagesProps {
  data?: Stage[];
}

const Timetable = ({ data }: StagesProps) => {
  const table = useReactTable({
    data: data ?? [],
    columns: columnDefinitions,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
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
                <td colSpan={4}>
                  <AccordionDropdown text="More information">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </AccordionDropdown>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
