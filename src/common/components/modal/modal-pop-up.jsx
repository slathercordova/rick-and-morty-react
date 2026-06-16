import styles from "./modal-pop-up.module.css";
import { useState, useEffect } from "react";

export function Modal({ open, onClose, children }) {
  const backgrounds = [
    "/src/common/images/imagen1.jpg",
    "/src/common/images/imagen2.jpg",
    "/src/common/images/imagen3.jpg",
    "/src/common/images/imagen4.jpg",
    "/src/common/images/imagen5.jpg",
    "/src/common/images/imagen6.jpg",
  ];

  const [bg, setBg] = useState("");

  //quita scroll al abrir el modal
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setBg(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      //style={{ backgroundImage: `url(${bg})` }}
      style={{ "--bg-image": `url(${bg})` }}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
