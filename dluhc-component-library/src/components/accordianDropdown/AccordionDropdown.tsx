import { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import { IndicationArrow } from "../inlinesvgs/IndicationArrow";

interface AccordionDropdownProps {
  text: string;
  children?: ComponentChildren;
  className?: string;
}

const AccordionDropdown = ({
  text,
  children,
  className,
}: AccordionDropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDropdownClicked = () => {
    setIsExpanded(!isExpanded);
  };

  const rotationClass = isExpanded ? "rotate-90" : "";

  const containerClass = `pt-1 pb-3 cursor-pointer w-fit ${className}`;

  return (
    <div className={containerClass} onClick={handleDropdownClicked}>
      <IndicationArrow
        className={`h-3 w-3 transition-all inline-block ${rotationClass}`}
      />
      <span className="text-blue-400 underline pl-2">{text}</span>
      {isExpanded && <div class="border-l-4 p-4 m-1">{children}</div>}
    </div>
  );
};

export default AccordionDropdown;
