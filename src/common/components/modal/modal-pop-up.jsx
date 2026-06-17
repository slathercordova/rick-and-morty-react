import styles from "./modal-pop-up.module.css";
import { useState, useEffect } from "react";
import imagen1 from "./../../../common/images/imagen1.jpg"
import imagen2 from "./../../../common/images/imagen2.jpg"
import imagen3 from "./../../../common/images/imagen3.jpg"
import imagen4 from "./../../../common/images/imagen4.jpg"
import imagen5 from "./../../../common/images/imagen5.jpg"
import imagen6 from "./../../../common/images/imagen6.jpg"

export function Modal({ open, onClose, children }) {
  const backgrounds = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
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
