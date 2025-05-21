import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Showcase from './pages/Showcase';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact'; // Импортируем компонент Contact
import Navbar from './components/Navbar';

function App() {
  const [cart, setCart] = useState([]);

  // Добавить товар в корзину или увеличить количество, если уже есть
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.name === item.name);
      if (existing) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Уменьшить количество товара или удалить из корзины, если 0
  const removeFromCart = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  // Очистить всю корзину
  const clearCart = () => setCart([]);

  return (
    <Router>
      {/* Navbar с отображением общего количества товаров в корзине */}
      <Navbar cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />

      <Routes>
        {/* Главная страница с возможностью добавления в корзину */}
        <Route path="/" element={<Showcase addToCart={addToCart} />} />

        {/* Страница корзины с управлением товарами */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />

        {/* Страница оформления заказа, получает текущую корзину */}
        <Route path="/checkout" element={<Checkout cart={cart} />} />

        {/* Страница контактов */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
