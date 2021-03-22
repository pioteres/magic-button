import { useRef, useEffect, forwardRef } from 'react';

const Button = forwardRef((props, ref) => {

  const btn = useRef();

  const handleMouseEnter = () => {
    btn.current.style.background = 'green';
    btn.current.style.color = 'white';
  }

  const handleMouseLeave = () => {
    btn.current.style.background = 'red';
    btn.current.style.color = 'white';
  }

  useEffect(()=> {
    btn.current.style.background = 'red';
    btn.current.style.color = 'white';
  },[])
  return (
    <button ref={btn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Click Me!</button>
  )
});

export default Button;
