import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "preact/compat";
import { ReactNode } from "react";
import MapComponent from "src/components/maps/MapComponent";
import { Boundary } from "src/components/maps/types";

interface MapComponentProps {
  baseMapProps: BaseMapProps;
  boundaries: Boundary[];
}

interface BaseMapProps {
  lat: number;
  lng: number;
  zoom: number;
  isDrawingMode: boolean;
}

const queryClient = new QueryClient();

const MapInput = ({ baseMapProps, boundaries }: MapComponentProps) => {
  const [boundary, setBoundary] = useState<Boundary>();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {
          (
            <MapComponent
              baseMapProps={baseMapProps}
              showDatasets={false}
              value={boundary}
              onChange={setBoundary}
              boundaries={boundaries}
            />
          ) as ReactNode
        }
      </QueryClientProvider>
    </>
  );
};

export default {
  component: MapInput,
  title: "Components/Map/Map Layer",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    baseMapProps: {
      isDrawingMode: false,
      lat: 54.97,
      lng: -1.65,
      zoom: 10,
      style: { height: "500px", width: "500px" },
    },
    submittedSites: [
      [
        [
          [-1.9332955613569025, 55.02451876227576],
          [-1.9167930901603967, 55.019563404930295],
          [-1.8810377359013006, 55.011678619347435],
          [-1.8676785925517483, 55.023617833775745],
          [-1.861784852838711, 55.031275080585004],
          [-1.851176121355243, 55.04253308016297],
          [-1.8547123651830657, 55.046810290566526],
          [-1.8822164838439084, 55.05086196330697],
          [-1.9211151659499577, 55.04590986317646],
        ],
      ],
      [
        [
          [-2.165608146802189, 55.31958831696505],
          [-2.2244362475815818, 55.29989337032612],
          [-2.220975771065147, 55.269346870638884],
          [-2.189831482417233, 55.215093603374044],
          [-2.0514124217598373, 55.21311936214278],
          [-1.9285655054263984, 55.24370909790659],
          [-1.9043421698113543, 55.29989337032612],
          [-1.9614400323325303, 55.33730540750591],
          [-2.1413848111871445, 55.33828945809077],
          [-2.165608146802189, 55.31958831696505],
        ],
      ],
      [
        [
          [-3.126849922223774, 54.97303461888697],
          [-3.146762641950336, 54.9616038501301],
          [-3.1543157425362733, 54.950958485897814],
          [-3.1515691605050233, 54.93123740084431],
          [-3.082217964215961, 54.91940010633644],
          [-3.035526069684711, 54.942282400185036],
          [-3.007373603864398, 54.971852276413614],
          [-3.047885688825336, 54.98958375882438],
          [-3.126849922223774, 54.97303461888697],
        ],
      ],
    ],
  },
};
