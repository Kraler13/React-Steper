import './App.css';

import Heading from './components/Heading';
import Steps from './Step';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text='React Steps app' classValue='gray' />
      </header>
      <Steps StepsInitValue={5} />

    </div>
  );
}

export default App;
