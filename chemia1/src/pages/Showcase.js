import React, { useState } from 'react';
import products from './products';
import './Showcase.css';

const Showcase = ({ addToCart }) => {
  const [addedItems, setAddedItems] = useState({});
  const [sortOrder, setSortOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems((prev) => ({ ...prev, [product.name]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.name]: false }));
    }, 1000);
  };

  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^\d.]/g, '').replace(',', ''));
  };

  const sortedProducts = () => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === 'asc') {
      return filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOrder === 'desc') {
      return filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else {
      return filtered;
    }
  };

  return (
    <div className="showcase">
      <h1 className="text-xl font-bold mb-4">Товары</h1>

      {/* Поиск */}
      <input
        type="text"
        placeholder="Поиск по названию..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Сортировка */}
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

      {/* Список товаров */}
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
