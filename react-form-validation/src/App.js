import logo from './logo.svg';
import './App.css';
import FormWithoutYup from './components/form-without-yup';
import FormWithYup from './components/form-with-yup';

function App() {
  return (
    <div className="App">
     {/* <FormWithoutYup/> */}
     <FormWithYup/>
    </div>
  );
}

export default App;
