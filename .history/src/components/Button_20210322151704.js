import { useRef, useEffect } from 'react';

const Button = () => {

  const btn = useRef();

  useEffect(()=> {
    btn.current.style.background = 'red';
    btn.current.style.color = 'white';
  },[])
  return (
    <button ref={btn}>Click Me!</button>
  )
}

export default Button;
