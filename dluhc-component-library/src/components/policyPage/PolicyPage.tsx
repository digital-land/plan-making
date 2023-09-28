import { ReactNode, useEffect, useState } from "react";
import { loadJson } from "src/utils";
import { Policy } from "../policyForm/types";
import { INITIAL_POLICY_STATE, THEME_OPTIONS } from "../policyForm/constants";
import MapComponent from "../maps/MapComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

  const baseMapProps = {
    isDrawingMode: false,
    lat: 54.97,
    lng: -1.65,
    zoom: 10,
    style: { height: "500px", width: "500px" },
  };

  const queryClient = new QueryClient();

  useEffect(() => {
    loadData();
  }, [setPolicyData, policyFilePath]);

  return (
    <div>
      <div>
        <h1 className="my-8 text-3xl font-bold">
          {policyData.reference} - {policyData.title}
        </h1>
        <p className="text-lg mb-8">{policyData.description}</p>
        <h2 className="mt-8  mb-4  text-xl font-bold">
          Themes this policy is linked to:
        </h2>
        <ul className="list-disc pl-8">
          {policyData.themes.map((theme) => (
            <li key={theme} className="text-sm">
              {
                THEME_OPTIONS.find((themeObject) => themeObject.key === theme)
                  ?.label
              }
            </li>
          ))}
        </ul>
        <h2 className="mt-8 mb-4 text-xl font-bold">
          Development should provide for the following:
        </h2>
        <ul className="list-disc pl-8">
          {policyData.requirements.map((requirement) => (
            <li key={requirement} className="text-sm mb-2">
              {requirement}
            </li>
          ))}
        </ul>
        <p className="w-2/3 text-lg mb-8 mt-6">
          {policyData.supplementaryText}
        </p>
        <div>
          <QueryClientProvider client={queryClient}>
            {
              (
                <MapComponent
                  baseMapProps={baseMapProps}
                  showDatasets={false}
                  boundaries={[policyData.boundary]}
                />
              ) as ReactNode
            }
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
