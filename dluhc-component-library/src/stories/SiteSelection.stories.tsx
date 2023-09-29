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
        "contactPage",
        "boundaryDataMap",
        "AdditionalConstraints",
        "siteAddress",
        "preApp",
        "flexability",
        "relationship",
        "blockers",
        "additionalComments",
      ],
      type: "object",
      properties: {
        groupedExample: {
          type: "object",
          properties: {
            landingPage: {
              //WIP - multilines of text + drop down
              title: "Suggest a plan for local plan 2040",
              subtitle:
                "To meet the needs of our residents and buisnesses up to 2040, we may need to identify additional land for development as part of our Local Plan 2040.\nWe want to look at a number of options, so we can choose the most suitable sites for new developers.\nIf you have any suggestions for sites that should be considered when we are developing the Local Plan, we want to hear from you. This is known as a 'call for sites'.\nThis call for sites doesnt determine how many new developments we need, or which sites will be allocated for development. It's an opportunity for local residents, community groups, business operators, landowners and developers to suggest sites that they would like to be considered as part of the Local Plan 2040.",
            },
            contactPage: {
              //WIP needs multi inputs, for time being given a text area
              title: "Please provide your contact details",
              subtitle:
                "We need your contact details so we can get in touch if we need to discuss your suggestion, clarify anything or gather information.\nYour contact details will only be used to contact you about this site suggestion. You can refer to our privacy notice for more information.\n Please provide your name, organisation (if relevant), email address and telephone number.",
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
            boundarySelection: {
              type: "string",
              title: "Please choose how you'd like to enter your site boundary",
              subtitle: "For this demo map assumed.",
              enum: [
                "Draw boundary on map",
                "Upload GIS shape file",
                "Find an address",
              ],
            },
            boundaryDataMap: {
              type: "array",
              title: "Where are the boundaries of this site?",
              items: {
                type: "array",
                items: { type: "array", items: { type: "number" } },
              },
            },
            potentialSiteConstraints: {
              //WIP - multi lines of text, put a radio for now
              type: "string",
              title: "Potential site constraints",
              subtitle:
                "This is a example of IF a area is over a potential risk, showing two possible options as to why.",
              enum: ["Ancient woodland", "Green belt"],
            },
            potentialSiteConstraintsCheck: {
              type: "string",
              title: "Potential site constraints",
              subtitle:
                "You are in flood zone 1. This is a example of IF a area is over a potential risk, following on from the previous page.",
              enum: [
                "I understand that this site is over 1 ha and will need to undertake a flood risk assessment should it be selected",
                "I dont want to provide a mitigation for this risk right now.",
              ],
            },
            AdditionalConstraints: {
              type: "string",
              title:
                "Are you aware of other constraints that you want to tell us about?",
              enum: ["Yes", "No"],
            },
            siteAddress: {
              //WIP needs multiple inputs, for time being given text area
              type: "string",
              title: "Site address",
              subtitle:
                "Please provide the fullest postal address you can for this site",
            },
            preApp: {
              type: "string",
              title:
                "Have you undertaken any pre-application discussions with the Council on this site?",
              enum: ["Yes", "No"],
            },
            flexability: {
              type: "string",
              title:
                "Would you be willing for this site to be joined with adjacent sites, or split up?",
              subtitle:
                "Sometimes it might be better to join sites together or, split up ones to make improved development sites.",
              enum: ["Yes", "No", "Maybe"],
            },
            relationship: {
              type: "string",
              title: "What is your connection to the site?",
              enum: [
                "Landowner or landowner's agent",
                "Developer or developer's agent",
                "commercial or business operator",
                "Local resident",
                "Community group",
              ],
            },
            blockers: {
              type: "array",
              items: { type: "string" },
              title: "Are any of the following true about the site?",
              subtitle: "You can select multiple",
              enum: [
                "Existing use on the site with a lease",
                "Multiple ownership",
                "Reliant on third party land (for example, to provide access or there are ransom strips) ",
                "Legal impediments to development (for example, restrictive covenants)",
                "Notable abnormal costs related to the development",
                "Neighbouring uses or structures that impact the development (for example, uses that affect amenity or structures that have associated offsets)",
                "The site can't be connected to existing utilities (for example: sewers, electricity, gas, and broadband)",
                "None",
              ],
            },
            timeline: {
              //WIP - need a additional "dont know" box
              type: "number",
              title:
                "When do you think the site will be ready for its intended use?",
              subtitle:
                "We need to know which financial year you think the site will be ready. For example, when you think the first house or business space will be built. Our financial year runs from 1 April to 31 March.",
              step: 1,
              min: 2023,
              max: 2040,
            },
            additionalComments: {
              type: "string",
              title:
                "Please provide any additional comments you wish to makes about the site",
              subtitle:
                "Please tell us if there's anything else you'd like us to know about this site, and the use or uses you've suggested for it. For example, its used by local people for specific activities.",
            },
          },
        },
      },
    },
    uiSchema: {
      boundaryDataMap: {
        "ui:widget": "map",
      },
      boundarySelection: {
        "ui:widget": "radio",
      },
      potentialSiteConstraintsCheck: {
        "ui:widget": "radio",
      },
      AdditionalConstraints: {
        "ui:widget": "radio",
      },
      preApp: {
        "ui:widget": "radio",
      },
      flexability: {
        "ui:widget": "radio",
      },
      relationship: {
        "ui:widget": "radio",
      },
      additionalComments: {
        "ui:widget": "textArea",
      },
      siteAddress: {
        "ui:widget": "textArea",
      },
      contactPage: {
        "ui:widget": "textArea",
      },
      potentialSiteConstraints: {
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
        groupedExample: {
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
      },
    },
    uiSchema: {
      boundaryDataMap: {
        "ui:widget": "map",
      },
    },
  },
};
