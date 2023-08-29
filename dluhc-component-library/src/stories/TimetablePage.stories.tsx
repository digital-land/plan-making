import TimetablePage from "../components/timetablePage/TimetablePage";

export default {
  component: TimetablePage,
  title: "SOW14/Timetable",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    stagesFilepath: "/plan-making/assets/timetable.csv",
    headersFilepath: "/plan-making/assets/timetableHeader.csv",
  },
};
