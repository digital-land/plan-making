import { useEffect, useState } from "react";
import { PolicyData } from "../policyForm/types";
import { loadCSV, loadJson } from "src/utils";
interface PolicyPageProps {
  policyFilePath: string;
}

const DEFAULT_POLICY_DATA: PolicyData = {
  reference: 0,
  title: "",
  description: "",
  requirements: [],
  boundary: [],
  themes: [],
  supplementaryText: "",
};

const PolicyPage = ({ policyFilePath }: PolicyPageProps) => {
  const [policyData, setPolicyData] = useState<PolicyData>(DEFAULT_POLICY_DATA);

  const loadData = async () => {
    if (/.json$/.test(policyFilePath)) {
      await loadJson(policyFilePath).then((data) => {
        setPolicyData(data);
      });
    }
  };

  useEffect(() => {
    loadData();
  }, [setPolicyData, policyFilePath]);

  return (
    <div>
      <div>
        <h1 className="my-8 text-3xl font-bold">
          {policyData.reference}
          {policyData.description}
          BR1234 - Birmingham Local Plan Policy
        </h1>
        <p className="w-2/3 text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <hr className="my-8"></hr>
        <h2 className="mt-8 text-xl font-bold">
          Themes this policy is linked to:
        </h2>
        <p className="text-sm">Themes placeholder</p>
        <p className="text-sm">Themes placeholder</p>
        <p className="text-sm">Themes placeholder</p>
        <p className="text-sm">Themes placeholder</p>

        <h2 className="mt-8 text-xl font-bold">Requirements for policy:</h2>
        <p className="text-sm">Requirements placeholder</p>
        <p className="text-sm">Requirements placeholder</p>
        <p className="text-sm">Requirements placeholder</p>
        <p className="text-sm">Requirements placeholder</p>

        <p className="w-2/3 text-lg mb-8 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>boundary placeholder</div>
      </div>
    </div>
  );
};

export default PolicyPage;
function csvToJson() {
  throw new Error("Function not implemented.");
}
