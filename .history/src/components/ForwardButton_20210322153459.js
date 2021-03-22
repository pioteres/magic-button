import React, { forwardRef } from 'react';

const ForwardButton = React.forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

export default ForwardButton;
