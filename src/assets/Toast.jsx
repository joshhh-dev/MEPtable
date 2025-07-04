// src/components/Toast.jsx
import React, { useEffect, useState } from "react";
import "./toastStyle.css";

export default function Toast({ message, type = "error", duration = 2000, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) setTimeout(onClose, 400); // Wait for fade out
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!message) return null;

  return (
    <div className={`toast ${type} ${!visible ? "hidden" : ""}`}>
      {message}
    </div>
  );
}
