import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  const cleanStr = priceStr.replace(/\s|грн\.|₴/gi, '').replace(/,/g, '');
  return parseFloat(cleanStr) || 0;
};

const Cart = ({ cart, addToCart, removeFromCart, clearCart }) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Корзина</h1>

      {cart.length === 0 ? (
        <p className="cart-empty">Корзина пуста</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Товар</th>
                <th className="text-center">Цена</th>
                <th className="text-center">Количество</th>
                <th className="text-center">Подытог</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td className="text-center">{parsePrice(item.price).toFixed(2)} ₴</td>
                  <td className="text-center">
                    <div className="quantity-controls">
                      <button onClick={() => removeFromCart(item)} className="quantity-btn">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)} className="quantity-btn">+</button>
                    </div>
                  </td>
                  <td className="text-center">{(parsePrice(item.price) * item.quantity).toFixed(2)} ₴</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="totals">
            <p className="total-amount">Итого: {subtotal.toFixed(2)} ₴</p>
          </div>

          <div className="buttons-row">
            <button onClick={clearCart} className="clear-btn">Очистить корзину</button>
            <Link to="/checkout" className="checkout-link">Оформить заказ</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
