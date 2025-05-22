import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cart, clearCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    novaPoshtaBranch: '',
    phone: '',
    email: '',
    telegram: '',
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [orderDate, setOrderDate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert('Нельзя оформить заказ — корзина пуста!');
      return;
    }

    const randomOrderNumber = Math.floor(Math.random() * (90000 - 10000 + 1)) + 10000;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('ru-RU');
    const totalAmount = cart
      .reduce(
        (sum, item) =>
          sum + parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity,
        0
      )
      .toFixed(2);

    const message = `
<b>Новый заказ</b>
<b>Номер заказа:</b> ${randomOrderNumber}
<b>Дата:</b> ${formattedDate}
<b>Итого:</b> ${totalAmount} ₴
<b>Способ оплаты:</b> Прямой банковский перевод

<b>Информация о заказе:</b>
${cart
  .map(
    (item) =>
      `- ${item.name} — ${item.quantity} × ${parseFloat(
        item.price.replace(/[^\d.]/g, '')
      ).toFixed(2)} ₴`
  )
  .join('\n')}

<b>Платёжный адрес:</b>
Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}
${formData.telegram ? `Телеграм: ${formData.telegram}` : ''}

<b>Адрес доставки:</b>
Город: ${formData.city}
Отделение Новой почты: ${formData.novaPoshtaBranch}
`;

    // Твой токен и чат ID
    const TELEGRAM_BOT_TOKEN = '7872409790:AAH1yejeWHfy7XLXFKegPJ90cm7c9i_fKws';
    const CHAT_ID = '@chemia_chemia';

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Ошибка при отправке сообщения');
      }

      // Очистка корзины после успешной отправки
      clearCart();

      setOrderNumber(randomOrderNumber);
      setOrderDate(formattedDate);
      setOrderConfirmed(true);
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
      alert('Ошибка при отправке заказа. Попробуйте позже.');
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity,
    0
  );

  if (orderConfirmed) {
    return (
      <div className="checkout-container">
        <h1>Ваш заказ принят. Благодарим вас.</h1>
        <p>
          <strong>Номер заказа:</strong> {orderNumber}
        </p>
        <p>
          <strong>Дата:</strong> {orderDate}
        </p>
        <p>
          <strong>Итого:</strong> {total.toFixed(2)} ₴
        </p>
        <p>
          <strong>Способ оплаты:</strong> Прямой банковский перевод
        </p>
        <p>
          Свяжитесь с консультантом для уточнения деталей оплаты и доставки.
          Спасибо, что выбрали наш сервис.
        </p>

        <h2>Информация о заказе</h2>
        <ul className="order-list">
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.name} — {item.quantity} ×{' '}
              {parseFloat(item.price.replace(/[^\d.]/g, '')).toFixed(2)} ₴
            </li>
          ))}
        </ul>

        <h2>Платёжный адрес</h2>
        <p>Имя: {formData.name}</p>
        <p>Телефон: {formData.phone}</p>
        <p>Email: {formData.email}</p>
        {formData.telegram && <p>Телеграм: {formData.telegram}</p>}

        <h2>Адрес доставки</h2>
        <p>Город: {formData.city}</p>
        <p>Отделение Новой почты: {formData.novaPoshtaBranch}</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Оформление заказа</h1>

      {cart.length === 0 ? (
        <p>Ваша корзина пуста. Добавьте товары, чтобы оформить заказ.</p>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Введите ваше имя"
            />
          </label>

          <label>
            Город
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Введите город"
            />
          </label>

          <label>
            Отделение Новой почты
            <input
              type="text"
              name="novaPoshtaBranch"
              value={formData.novaPoshtaBranch}
              onChange={handleChange}
              required
              placeholder="Введите отделение"
            />
          </label>

          <label>
            Телефон
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+380 ХХХ ХХХ ХХ ХХ"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@mail.com"
            />
          </label>

          <label>
            Телеграм (необязательно)
            <input
              type="text"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="@username или номер"
            />
          </label>

          <h2>Ваш заказ</h2>
          <ul className="order-list">
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} — {item.quantity} ×{' '}
                {parseFloat(item.price.replace(/[^\d.]/g, '')).toFixed(2)} ₴
              </li>
            ))}
          </ul>

          <p className="order-total">Итого: {total.toFixed(2)} ₴</p>

          <div className="payment-info">
            <h3>Прямой банковский перевод</h3>
            <p>
              Свяжитесь с консультантом для уточнения деталей оплаты и доставки.
              Спасибо, что выбрали наш сервис.
            </p>
          </div>

          <button type="submit" className="confirm-btn" disabled={cart.length === 0}>
            Подтвердить заказ
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
