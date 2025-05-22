import React, { useState } from 'react';
import './Contact.css'; // Можно добавить стили по желанию

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    telegram: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки данных, например, на сервер
    // Пока просто покажем сообщение об успешной отправке
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      {submitted ? (
        <h1>Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</h1>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Связь с нами</h1>
          <label>
            Ваше имя
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
            Ваш e-mail
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
            Номер телефона
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
            Телеграм (необязательное)
            <input
              type="text"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="@username или номер"
            />
          </label>

          <label>
            Тема
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Тема сообщения"
            />
          </label>

          <label>
            Сообщение
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Введите ваше сообщение"
              rows="5"
            />
          </label>

          <button type="submit">Отправить</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
