import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type RowData = {
  developmentPlanEvent: string;
  startDate: string;
  endDate: string;
  progress: string;
};

const columnHelper = createColumnHelper<RowData>();

const columns = [
  columnHelper.accessor("developmentPlanEvent", {
    cell: (data) => <span className="font-medium">{data.getValue()}</span>,
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
    cell: (data) => <span className="uppercase">{data.getValue()}</span>,
    header: () => <span>Progress</span>,
  }),
];

interface StagesProps {
  data?: RowData[];
}

const Timetable = ({ data }: StagesProps) => {
  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="px-4">
      <table className="w-full text-sm text-left px-4">
        <thead className="text-xs text-gray-700 uppercase text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-3">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
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
                  <td key={cell.id} className="py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <a>More Information</a>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
