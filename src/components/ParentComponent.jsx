import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const childRef = useRef(null);

  const handleFocusInput = () => {
    childRef.current.focusInput();
  };

  const handleResetInput = () => {
    childRef.current.resetInput();
  };

  return (
    <>
      <ChildComponent ref={childRef} />
      <button onClick={handleFocusInput}>Focus Input</button>
      <button onClick={handleResetInput}>Reset Input</button>
    </>
  );
};

export default ParentComponent;
