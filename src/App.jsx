import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Cart from './pages/Cart'


const App = () => {
  return (
    <div>
      <div>
          <Navbar />
      </div>
      <Routes>
          <Route path='/' element = {<Home />} />
          <Route path = '/cart' element =  {<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
