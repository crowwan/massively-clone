import './reset.css';
import './App.css';
import Main from './pages/Main';
import {Route, Routes} from 'react-router-dom';
import Generic from './pages/Generic';
import ElementReference from './pages/ElementReference';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path = '/' element={<Main/>}></Route>
        <Route path='/generic' element={<Generic/>}></Route>
        <Route path='/element-reference' element={<ElementReference/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
