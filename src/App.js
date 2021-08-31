import BootrapTable from './components/table';
import data from "./components/data/data.json"
import './App.css';

function App() {
  return (
    <div className="App">
      
        <BootrapTable data={data.slice(0,30)} />
      
    </div>
  );
}

export default App;
