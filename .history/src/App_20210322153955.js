import { forwardRef} from 'react';
import Button from './components/Button';
// import ForwardButton from './components/ForwardButton';
import './App.css';


const ForwardButton = forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

function App() {
  const ref = React.createRef();
  return (
    <div className="App">
      <ForwardButton ref={ref}>Click me!</ForwardButton>

    </div>
  );
}

export default App;
