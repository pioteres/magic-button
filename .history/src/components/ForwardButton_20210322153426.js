import { forwardRef } from 'react';

const ForwardButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

export default ForwardButton;
