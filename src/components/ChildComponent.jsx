import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    resetInput: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} />;
});

export default ChildComponent;
