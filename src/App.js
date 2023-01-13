import './App.css';
import CartSidebar from './components/CartSidebar';
import Category from './components/Category';
import Food from './components/Food';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
      <CartSidebar/>
      <Toggle/>
    </div>
  );
}

export default App;
