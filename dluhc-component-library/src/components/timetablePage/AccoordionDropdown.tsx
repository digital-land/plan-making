const AccordionDropdown = () => {
  return (
    <>
      <div className="pt-1 pb-3">
        <span id="accordian" className="text-blue-400 underline cursor-pointer">
          More information
        </span>
        <div id="dropdown" className="toggle hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </>
  );
};

export default AccordionDropdown;
