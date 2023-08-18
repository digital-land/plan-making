import formSchema from "/plan-making/assets/siteSelectionFull.json";
import SiteSelection from "../components/siteSelectionForm/SiteSelectionForm";

export default {
  component: SiteSelection,
  title: "SOW13/Site Selection Form",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    data: formSchema,
  },
};
