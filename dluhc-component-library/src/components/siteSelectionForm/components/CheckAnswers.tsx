import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FormPageSchema, FormState, FormValue } from "../types";
import { createColumnHelper } from "@tanstack/table-core";

interface CheckAnswersProps {
  formSchema: FormPageSchema;
  formData: FormState;
  onBackClicked: () => void;
  onSubmitClicked: () => void;
}

type CheckAnswers = {
  question: string;
  answer: FormValue;
};

const columnHelper = createColumnHelper<CheckAnswers>();

export const columnDefinitions = [
  columnHelper.accessor("question", {
    cell: (data) => <span className="font-bold">{data.getValue()}</span>,
    // header: () => <span>Stage</span>,
  }),
  columnHelper.accessor("answer", {
    cell: (data) => data.getValue(),
    // header: () => <span>Start Date</span>,
  }),
];

const CheckAnswers = ({
  formSchema,
  formData,
  onBackClicked,
  onSubmitClicked,
}: CheckAnswersProps) => {
  const data = Object.keys(formSchema?.properties).map((key) => ({
    question: formSchema.properties[key].title,
    answer: formData[key],
  }));

  console.log("data");
  console.log(data);

  const table = useReactTable({
    data: data ?? [],
    columns: columnDefinitions,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="form-page-header mb-4">
        <h1 className="my-2 text-4xl font-bold">Check your answers</h1>
      </div>
      <table className="w-full text-sm text-left px-4">
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
              <tr className="border-b"></tr>
            </>
          ))}
        </tbody>
      </table>
      <div>{formSchema}</div>
      <div className="form-page-footer mt-10 flex space-x-6">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-2"
          onClick={onBackClicked}
        >
          Back
        </button>
        <button
          className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
          onClick={onSubmitClicked}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CheckAnswers;
