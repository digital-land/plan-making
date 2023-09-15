import { useEffect, useState } from "react";
import { loadJson } from "src/utils";
import { Policy } from "../policyForm/types";
import { INITIAL_POLICY_STATE } from "../policyForm/constants";
interface PolicyPageProps {
  policyFilePath: string;
}

const PolicyPage = ({ policyFilePath }: PolicyPageProps) => {
  const [policyData, setPolicyData] = useState<Policy>(INITIAL_POLICY_STATE);

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
          <p key={theme} className="text-sm">
            {theme}
          </p>
        ))}
        <h2 className="mt-8 text-xl font-bold">Requirements for policy:</h2>
        {policyData.requirements.map((requirement) => (
          <p key={requirement} className="text-sm">
            {requirement}
          </p>
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
