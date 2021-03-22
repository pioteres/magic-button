import React, { createRef} from 'react';
import Button from './components/Button';
import ForwardButton from './components/ForwardButton';
import './App.css';

function App() {
  const btnRef = createRef();
  const handleMouseEnter = (e) => {
    e.currentTarget.style.background="green";
  }
  const handleMouseLeave = (e) => {
    e.currentTarget.style.background="red";
  }
  return (
    <div className="App">
      <Button />
      <ForwardButton ref={btnRef} {...{handleMouseEnter, handleMouseLeave}}>Click me!</ForwardButton>

    </div>
  );
}

export default App;
