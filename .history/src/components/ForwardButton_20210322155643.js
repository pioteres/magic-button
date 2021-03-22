const ForwardButton = forwardRef((props, ref) => {
  const { children, handleMouseEnter, handleMouseLeave } = props;
  return(
  <button ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {children}
  </button>
)});

export default ForwardButton;
