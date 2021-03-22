
import React from 'react';

const ForwardButton = React.forwardRef((props, ref) => {
  const { children, handleMouseEnter, handleMouseLeave } = props;
  return (
    <button
      ref={ref}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      {children}
    </button>
  )
});

export default ForwardButton;
