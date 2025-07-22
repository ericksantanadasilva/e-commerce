import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/HomePage/Home';
import Checkout from './pages/CheckoutPage/checkout';
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory';
import { Routes, Route } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const removeFromCart = (productId) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[productId];
    setCartItems(cartItemsCopy);
  };

  const addToCart = (productId) => {
    const updatedCart = {
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    };
    setCartItems(updatedCart);
  };

  const decreaseUnit = (productId) => {
    if (cartItems[productId] > 1) {
      const updatedCart = {
        ...cartItems,
        [productId]: cartItems[productId] - 1,
      };
      setCartItems(updatedCart);
    } else {
      removeFromCart(productId);
    }
  };

  const toogleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toogleIsCartOpen,
        cartItems,
        addToCart,
        decreaseUnit,
        removeFromCart,
      }}
    >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
