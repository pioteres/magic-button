const ForwardButton = forwardRef(({children, handleMouseEnter, handleMouseLeave}, ref) => {
  return(
  <button ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {children}
  </button>
)});

export default ForwardButton;
