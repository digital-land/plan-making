import SiteSelection from "src/components/siteSelectionForm/SiteSelectionForm";

export default {
  component: SiteSelection,
  title: "SOW13/Site Selection Form",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    data: {
      required: [
        "siteUse",
        "relationshipTo",
        "address",
        "name",
        "age",
        "consent",
      ],
      type: "object",
      properties: {
        name: {
          type: "string",
          title: "Your name",
        },
        consent: {
          type: "boolean",
          title: "I confirm consent for my data to be processed",
        },
        siteUse: {
          type: "array",
          items: { type: "string" },
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
            "Landowner",
            "Developer",
            "Local Authority",
            "Planning Agent",
            "None",
          ],
        },
        isBrownfieldSite: {
          type: "boolean",
          title: "Is this a Brownfield Site? ",
        },
        age: {
          type: "number",
          title: "Age in years",
          step: 1,
          min: 18,
          max: 35,
        },
        address: {
          type: "string",
          title: "Please provide the fullest postal address you can",
        },
      },
    },
    uiSchema: {
      relationshipTo: {
        "ui:widget": "radio",
      },
      isBrownfieldSite: {
        "ui:widget": "radio",
      },
    },
  },
};

export const ConditionalPage = {
  args: {
    data: {
      required: [],
      type: "object",
      properties: {
        groupedExample: {
          type: "object",
          properties: {
            parentQuestion: {
              type: "string",
              title: "Parent question",
              subtitle: 'Adding a value here will add an "Additional question"',
            },
            unrelatedQuestion: {
              type: "string",
              title: "Unrelated question",
              subtitle:
                "This question should come after the Parent and Additional questions",
            },
          },
          dependencies: {
            parentQuestion: {
              properties: {
                addedQuestion: {
                  type: "string",
                  title: "Additional question",
                  subtitle:
                    'This question should only be asked if you answered the "Parent questions"',
                },
              },
              required: ["addedQuestion"],
            },
          },
        },
      },
    },
  },
};

export const MapPage = {
  args: {
    data: {
      required: ["boundaryDataMap"],
      type: "object",
      properties: {
        boundaryDataMap: {
          type: "array",
          title: "Where are the boundaries of this site?",
          items: {
            type: "array",
            items: { type: "array", items: { type: "number" } },
          },
        },
        unrelatedQuestion: {
          type: "string",
          title: "Unrelated question",
          subtitle:
            "This question should come after the Parent and Additional questions",
        },
      },
    },
    uiSchema: {
      boundaryDataMap: {
        "ui:widget": "map",
      },
    },
  },
};
