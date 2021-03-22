import React, { createRef, forwardRef} from 'react';
import Button from './components/Button';
import ForwardButton from './components/ForwardButton';
import './App.css';

function App() {
  const btnRef = createRef();
  const handleMouseEnter = (e) => {
    e.currentTarget.style.background="green";
  }
  return (
    <div className="App">
      <Button />
      <ForwardButton ref={btnRef} onMouseEnter={handleMouseEnter}>Click me!</ForwardButton>

    </div>
  );
}

export default App;
