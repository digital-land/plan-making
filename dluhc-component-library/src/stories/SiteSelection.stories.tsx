import SiteSelection from "src/components/siteSelectionForm/SiteSelectionForm";

export default {
  component: SiteSelection,
  title: "SOW13/Site Selection Form",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    data: {
      required: ["siteUse", "relationshipTo", "address", "name"],
      type: "object",
      properties: {
        siteUse: {
          type: "string",
          title:
            "What use or uses do you think should be considered for this site?",
          subtitle: "You can choose as many uses as you'd like.",
          enum: [
            "Housing",
            "Industry - including distribution or logistics uses",
            "Commercial uses - office, retails, leisure, hotel or mixed",
            "Community uses",
            "Minerals - extracting, processing , and so on",
            "Waste - recycling or processing",
            "Tourism",
            "Gypsy and Traveller site",
            "Travelling Show-people site",
            "New public green space",
            "Renewable energy",
            "Energy storage",
            "Other",
          ],
        },
        relationshipTo: {
          type: "string",
          title: "Your relationship to the site",
          enum: [
            "landowner",
            "developer",
            "local-authority",
            "planning-agent",
            "none",
          ],
        },
        address: {
          type: "string",
          title: "Please provide the fullest postal address you can",
        },
        name: {
          type: "string",
          title: "Your name",
        },
        age: {
          type: "number",
          title: "Age in years",
        },
      },
    },
  },
};
