import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type RowData = {
  stage: string;
  startDate: string;
  endDate: string;
  progress: string;
};

const mockData: RowData[] = [
  {
    stage: "Scoping of the new local plan",
    startDate: "January 2023",
    endDate: "March 2023",
    progress: "Finished",
  },
];

const columnHelper = createColumnHelper<RowData>();

const columns = [
  columnHelper.accessor("stage", {
    cell: (data) => data.getValue(),
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
    cell: (data) => data.getValue(),
    header: () => <span>Progress</span>,
  }),
];

const Stages = () => {
  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-gray-700 uppercase text-left">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} scope="col" className="px-6 py-3">
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
                <td key={cell.id} className="px-6 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
            <div className="px-6">
              <a>More Information</a>
            </div>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Stages;
