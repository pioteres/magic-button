import Button from './components/Button';
// import ForwardButton from './components/ForwardButton';
import './App.css';


const ForwardButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

function App() {
  return (
    <div className="App">
      <Button />

    </div>
  );
}

export default App;
