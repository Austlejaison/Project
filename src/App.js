
import './App.css';
import { Route, Routes } from 'react-router';
import ProfilePage from './component/ProfilePage';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<ProfilePage/>}/>
</Routes>
   </div>
  );
}

export default App;
