
import './App.css';
import { Route, Routes } from 'react-router';
import Profilo from './component/Profilo';


function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Profilo/>}/>
</Routes>
   </div>
  );
}

export default App;
