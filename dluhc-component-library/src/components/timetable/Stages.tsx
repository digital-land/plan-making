import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type rowData = {
  stage: string;
  startDate: string;
  endDate: string;
  progress: string;
};

const mockData = [
  {
    stage: "Scoping of the new local plan",
    startData: "January 2023",
    enbdDate: "March 2023",
    proess: "Finished",
  },
];

const columnHelper = createColumnHelper<rowData>();

const columns = [
  columnHelper.accessor("stage", {
    cell: (data) => data.getValue(),
    header: () => <span>Stage</span>,
  }),
];

const Stages = () => {
  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Stages;
