import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Detail from './components/Product/Detail'
import { Route, Routes } from 'react-router';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<Home/>}/>
          <Route path='/product/:productId' element={<Detail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
