import styles from "./tutorial-overlay.module.css"

export function TutorialOverlay({ onClose }) {
  return (
    <div className={styles.tutorialOverlay} onClick={ onClose }>
      <div className={styles.tutorialMessage}>
        👆 Haz clic en "Personajes" para comenzar tu colección
      </div>
    </div>
  );
}