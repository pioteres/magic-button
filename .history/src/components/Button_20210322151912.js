import { useRef, useEffect } from 'react';

const Button = () => {

  const btn = useRef();

  const changeBtnColor = () => {
    btn.current.style.background = 'green';
    btn.current.style.color = 'white';
  }

  }
  useEffect(()=> {
    btn.current.style.background = 'red';
    btn.current.style.color = 'white';
  },[])
  return (
    <button ref={btn} onMouseOver={changeBtnColor}>Click Me!</button>
  )
}

export default Button;
