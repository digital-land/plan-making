import { Polygon } from "ol/geom";
import { useMemo } from "react";
import { useFetchEntities } from "src/api/planningData/api";
import AccordionDropdown from "src/components/accordianDropdown/AccordionDropdown";
import MapComponent from "src/components/maps/MapComponent";
import { Boundary } from "src/components/maps/types";

interface MapPageProps {
  value?: Boundary;
  onChange: (values: Boundary) => void;
}

// TODO we probably should move these to an API constants file or a PDP model file
const GREEN_BELT = "green-belt";
const ANCIENT_WOODLAND = "ancient-woodland";

const RISKS = [GREEN_BELT, ANCIENT_WOODLAND];

// TODO these should probably come from a network request to PDP like the datalist does
const RISK_LABELS: Record<string, string> = {
  [GREEN_BELT]: "Green belt",
  [ANCIENT_WOODLAND]: "Ancient woodland",
};

const renderRisks = (activeRisks: ReadonlyArray<string>) => {
  return activeRisks.map((risk) => <li>{RISK_LABELS[risk]}</li>);
};

const MapPage = ({ value, onChange }: MapPageProps) => {
  const polygon = useMemo(
    () => (value ? new Polygon(value as number[][][]) : undefined),
    [value],
  );

  const { data: riskData, isFetching } = useFetchEntities(polygon);

  const activeRisks = useMemo(
    () =>
      riskData?.features.reduce<ReadonlyArray<string>>((riskList, feature) => {
        const dataset = feature.properties?.dataset;

        if (!riskList.includes(dataset) && RISKS.includes(dataset)) {
          return [...riskList, dataset];
        }

        return riskList;
      }, []),
    [riskData],
  );

  const hasRisks = value && !isFetching && !!activeRisks?.length;

  return (
    <div className="flex flex-col mb-4">
      <div className="my-4">
        Draw the boundaries of your suggested site using the polygon icon on the
        right of the map. You can edit the boundaries with the pencil icon.
      </div>
      <MapComponent
        className="my-4"
        style={{ height: "470px", width: "100%" }}
        value={value}
        onChange={onChange}
      />
      <AccordionDropdown text="Help drawing a site boundary">
        <p className="mb-2">To draw the boundaries of your suggested site:</p>
        <ul className="list-disc pl-8">
          <li>
            Type in a road name or postcode into the search bar at the top of
            the map
          </li>
          <li>
            Once you've found the area your site is in, use the polygon icon on
            the right of the map to start drawing a boundary
          </li>
          <li>
            Select the edges of the site until the whole site is within the blue
            shape
          </li>
          <li>Double-click to finish the shape</li>
        </ul>
      </AccordionDropdown>
      <AccordionDropdown text="Change or delete a site boundary">
        <p className="mb-2">
          If you want to make any changes to the site boundary once you've
          finished, select the pencil icon on the right of the map to do so.
        </p>
        <p className="mb-2">
          If you're not happy with the boundary you've drawn, select the delete
          icon on the right of the map and start again.
        </p>
        <p className="mb-2">
          If you want to change the map view - such as switching to aerial
          pictures - select the gallary icon on the right of the map.
        </p>
      </AccordionDropdown>
      <h2 className="my-4 text-3xl font-bold">
        After you've drawn your boundary
      </h2>
      <p className="my-2">
        It's helpful for us if you draw a boundary that's as accurate as
        possible - but there's no need to do it over and over to get it exactly
        right.
      </p>
      <p className="my-2">
        We'll ask for your contact details later in the form, and we'll get in
        touch if we have any questions about where the boundary line is intended
        to be.
      </p>
      {isFetching && <p className="my-8">Loading...</p>}
      {hasRisks && (
        <>
          <h2 className="my-4 text-3xl font-bold">
            Your site has flagged some risks
          </h2>
          <p className="my-2">
            Planning data shows that some or all of your site is located in a
            restricted area.
          </p>
          <p className="my-2">You can:</p>
          <ul className="list-disc pl-8">
            <li>Tell us how to mitigate the risks on the next screens</li>
            <li>Change the site boundary on the map</li>
          </ul>
          <p className="my-2">Identified risks:</p>
          <ul className="list-disc pl-8">{renderRisks(activeRisks)}</ul>
        </>
      )}
    </div>
  );
};

export default MapPage;
