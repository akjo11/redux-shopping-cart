
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Products/>}/>
        <Route path='/cart' element={ <Cart/>}/>
        
      </Routes>
     
    </div>






    </Router>
  );
}

export default App;
