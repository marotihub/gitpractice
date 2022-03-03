import './App.css';
import AxiosApiCall from './component/AxiosApiCall';
import FetchApicall from './component/FetchApicall';
import Parent from './pureComponent/Parent';
import UseCallBackHook from './useCallback/UseCallBackHook';
import CalculateFactorial  from './useMemo hook/CalculateFactorial';
import Counter from './useMemo hook/Counter';

function App() {
  return (
    <div className="App">
     <h1>First Github heading</h1>
     {/* <FetchApicall/> */}
     {/* <AxiosApiCall/> */}
     {/* ********Pure component example*** */}
     {/* <Parent/> */}

     {/* ****useCallback Hook*** */}
     {/* <UseCallBackHook/> */}

     {/* ****useMemo** */}
     <CalculateFactorial/>
    </div>
  );
}

export default App;
