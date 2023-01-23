
import Category from './components/category/Category.jsx';
import './App.css';
import Categorypost from './components/category/Categorypost.jsx';
import {Route,Router, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={ <Category />}/>
    <Route path='/categorypost' element={<Categorypost />}/>

    </Routes>
   
   
     
    </div>
  );
}

export default App;
