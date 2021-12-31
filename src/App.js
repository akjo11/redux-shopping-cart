
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import ViewItem from './components/ViewItem/ViewItem';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Products/>}/>
        <Route path='/cart' element={ <Cart/>}/>
        <Route path='/product/:id' element={ <ViewItem/>}/>

      </Routes>
     
    </div>






    </Router>
  );
}

export default App;
