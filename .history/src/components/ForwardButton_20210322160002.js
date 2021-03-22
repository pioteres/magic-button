
import React from 'react';

const ForwardButton = React.forwardRef((props, ref) => {
  const { children, handleMouseEnter, handleMouseLeave } = props;
  return (
    <button
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={}
    >
      {children}
    </button>
  )
});

export default ForwardButton;
