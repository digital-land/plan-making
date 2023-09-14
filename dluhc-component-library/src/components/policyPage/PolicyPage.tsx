import { useEffect, useState } from "react";
import { PolicyData } from "../policyForm/types";
import { loadJson } from "src/utils";
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
          {policyData.reference} - {policyData.title}
        </h1>
        <p className="w-2/3 text-lg mb-8">{policyData.description}</p>
        <hr className="my-8"></hr>
        <h2 className="mt-8 text-xl font-bold">
          Themes this policy is linked to:
        </h2>
        {policyData.themes.map((theme) => (
          <p className="text-sm">{theme}</p>
        ))}
        <h2 className="mt-8 text-xl font-bold">Requirements for policy:</h2>
        {policyData.requirements.map((requirements) => (
          <p className="text-sm">{requirements}</p>
        ))}
        <p className="w-2/3 text-lg mb-8 mt-6">
          {policyData.supplementaryText}
        </p>
        <div>boundary placeholder</div>
      </div>
    </div>
  );
};

export default PolicyPage;
