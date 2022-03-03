import './App.css';
import AxiosApiCall from './component/AxiosApiCall';
import FetchApicall from './component/FetchApicall';
import Parent from './pureComponent/Parent';
import UseCallBackHook from './useCallback/UseCallBackHook';

function App() {
  return (
    <div className="App">
     <h1>First Github heading</h1>
     {/* <FetchApicall/> */}
     {/* <AxiosApiCall/> */}
     {/* ********Pure component example*** */}
     {/* <Parent/> */}

     {/* ****useCallback Hook*** */}
     <UseCallBackHook/>
    </div>
  );
}

export default App;
