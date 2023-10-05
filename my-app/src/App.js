
import Header from './components/Header';

import Footer from './components/Footer';
import Contact from './components/Contact';
import Product from './components/Product';
import About from './components/About';
import {Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="products" element={<Product/>} />
        <Route path="products/:id" element={<ProductDetail/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="checkout" element={<CheckOut/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />


        {/* <Route render={() => <Navigate to="/" />} /> */}
      </Routes>

    \
      
    </div>
  );
}

export default App;
