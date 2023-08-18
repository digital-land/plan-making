import { useState } from "react";
import { IndicationArrow } from "../inlinesvgs/IndicationArrow";

const AccordionDropdown = ({ information }: { information?: string }) => {
  const [isClicked, setClicked] = useState(false);

  const toggle = () => {
    isClicked == true ? setClicked(false) : setClicked(true);
  };

  return (
    <>
      <div className="pt-1 pb-3">
        <IndicationArrow
          className={
            "h-3 w-3 transition-all inline-block" +
            (isClicked ? " rotate-90" : "")
          }
        />
        <span
          className="text-blue-400 underline cursor-pointer pl-2"
          onClick={() => toggle()}
        >
          More information
        </span>
        {isClicked ? <div class="border-l-4 p-4 m-1">{information}</div> : null}
      </div>
    </>
  );
};

export default AccordionDropdown;
