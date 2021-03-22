import { useRef, useEffect } from 'react';

const Button = () => {

  const btn = useRef();

  useEffect(()=> {
    btn.current.style.background = 'red';
  },[])
  return (
    <button ref={btn}>Click Me!</button>
  )
}

export default Button;
