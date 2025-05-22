import React, { useState } from 'react';
import './ChatWidget.css';
import widgetImage from '../assets/widget.png'; // Убедись, что файл действительно существует

const ChatWidget = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="chat-widget-wrapper">
      {open && (
        <div className="chat-popup">
          <img src={widgetImage} alt="Widget" className="chat-widget-image" />
          <button className="chat-close-button" onClick={() => setOpen(false)}>×</button>
        </div>
      )}

      <div className="chat-side-button" onClick={() => setOpen(!open)}>
        Онлайн консультант
      </div>
    </div>
  );
};

export default ChatWidget;
