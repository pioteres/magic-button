import React, { forwardRef} from 'react';
import Button from './components/Button';
import ForwardButton from './components/ForwardButton';
import './App.css';



function App() {
  return (
    <div className="App">
      <Button />
      {/* <ForwardButton ref={ref}>Click me!</ForwardButton> */}

    </div>
  );
}

export default App;
