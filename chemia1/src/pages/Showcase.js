import React, { useState } from 'react';
import products from './products';
import './Showcase.css';

const Showcase = ({ addToCart }) => {
  const [addedItems, setAddedItems] = useState({});
  const [sortOrder, setSortOrder] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems((prev) => ({ ...prev, [product.name]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.name]: false }));
    }, 1000);
  };

  // Функция для преобразования строки в число (удаляет "грн.", пробелы, запятые и приводит к числу)
  const parsePrice = (priceStr) => {
    return parseFloat(
      priceStr.replace(/[^\d.]/g, '').replace(',', '') // Удаляем всё, кроме цифр и точки
    );
  };

  const sortedProducts = () => {
    if (sortOrder === 'asc') {
      return [...products].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOrder === 'desc') {
      return [...products].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else {
      return products;
    }
  };

  return (
    <div className="showcase">
      <h1 className="text-xl font-bold mb-4">Товары</h1>

      <div className="sort-buttons">
        <button
          onClick={() => setSortOrder(null)}
          className={`sort-button ${sortOrder === null ? 'active' : ''}`}
        >
          По умолчанию
        </button>
        <button
          onClick={() => setSortOrder('asc')}
          className={`sort-button ${sortOrder === 'asc' ? 'active' : ''}`}
        >
          По возрастанию ↑
        </button>
        <button
          onClick={() => setSortOrder('desc')}
          className={`sort-button ${sortOrder === 'desc' ? 'active' : ''}`}
        >
          По убыванию ↓
        </button>
      </div>

      <div className="products">
        {sortedProducts().map((product) => (
          <div key={product.name} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className={`add-button ${addedItems[product.name] ? 'added' : ''}`}
              >
                {addedItems[product.name] ? '✔ Добавлено!' : 'Добавить в корзину'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
