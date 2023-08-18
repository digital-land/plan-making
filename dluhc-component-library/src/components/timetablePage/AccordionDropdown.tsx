import { useState } from "react";
import { IndicationArrow } from "../inlinesvgs/IndicationArrow";
import { ComponentChildren } from "preact";

interface AccordionDropdownProps {
  children?: ComponentChildren;
}

const AccordionDropdown = ({ children }: AccordionDropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDropdownClicked = () => {
    isExpanded == true ? setIsExpanded(!isExpanded) : setIsExpanded(true);
  };

  const rotationClass = isExpanded ? "rotate-90" : "";

  return (
    <div className="pt-1 pb-3">
      <IndicationArrow
        className={`h-3 w-3 transition-all inline-block ${rotationClass}`}
      />
      <span
        className="text-blue-400 underline cursor-pointer pl-2"
        onClick={handleDropdownClicked}
      >
        More information
      </span>
      {isExpanded && <div class="border-l-4 p-4 m-1">{children}</div>}
    </div>
  );
};

export default AccordionDropdown;
