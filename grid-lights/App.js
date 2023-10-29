import logo from './logo.svg';
import './App.css';
import {formatData} from './utils'
import CheckedTree from './CheckedTree';
import Cells from './Cells';
function App() {

  const formatttedData=formatData(data)
  console.log(formatttedData)
  return (
    <div className="App">
      <header className="App-header">
       {/* <input type="text"/>
       <input type="text"/>
       <CheckedTree data={formatttedData}/>
       <button>Submit</button> */}
       <Cells/>
      </header>
    </div>
  );
}

export default App;
