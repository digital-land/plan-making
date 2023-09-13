import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FormPageSchema, FormState, FormAnswers } from "../types";
import { createColumnHelper } from "@tanstack/table-core";
import { useMemo } from "preact/hooks";

interface CheckAnswersProps {
  formSchema: FormPageSchema;
  formData: FormState;
  onBackClicked: () => void;
  onSubmitClicked: () => void;
}

const columnHelper = createColumnHelper<FormAnswers>();

const columnDefinitions = [
  columnHelper.accessor("question", {
    cell: (data) => <span className="font-bold">{data.getValue()}</span>,
  }),
  columnHelper.accessor("answer", {
    cell: (data) => {
      const value = data.getValue();
      return Array.isArray(value) && value.length > 0
        ? value.join(", ")
        : value;
    },
  }),
];

const getAnswers = (
  properties: Record<string, FormPageSchema>,
  formData: FormState,
) => {
  return Object.keys(properties).map((key) => ({
    question: properties[key].title,
    answer: formData[key],
  }));
};

const CheckAnswers = ({
  formSchema,
  formData,
  onBackClicked,
  onSubmitClicked,
}: CheckAnswersProps) => {
  const data = useMemo(
    () =>
      formSchema.properties ? getAnswers(formSchema.properties, formData) : [],
    [formSchema, formData],
  );

  const table = useReactTable({
    data: data,
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
