import logo from './logo.svg';
import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import Home from './samplecomponents/Home';
import About from './samplecomponents/About';
import Services from './samplecomponents/Services';
import Contact from './samplecomponents/Contact';
import Products from './samplecomponents/Products';
import ProductDetails from './samplecomponents/ProductDetails';
import ParentComponent from './samplecomponents/Parent';
import UseRefComponet from './samplecomponents/InputRef';
function App() {
  return (
    <div className="App">
      {/*step for Links */}
       <Link to='/home'>Home </Link> | 
      <Link to='/about'>About </Link> | 
      <Link to='/services'>Services </Link> |
      <Link to='/Contacts'>Contacts </Link> |
      <Link to='/products'>ProductDetails </Link> 
      <hr/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contacts' element={<Contact/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:productId' element={<ProductDetails/>}/>
      </Routes> 
      // <ParentComponent/>
      // <UseRefComponet/>
      
    </div>
  );
}

export default App;
