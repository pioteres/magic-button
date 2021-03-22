import { forwardRef } from 'react';

const ForwardButton = forwardRef((props, ref) => {
  return <button ref={ref}>{props.children}</button>;
});

export default ForwardButton;
