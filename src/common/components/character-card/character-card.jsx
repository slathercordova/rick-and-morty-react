import { Heart, Activity, Dna, VenusAndMars, Circle } from "lucide-react";
import styles from "./character-card.module.css";
import { useState } from "react";
import { Modal } from "./../modal/modal-pop-up";

export function CharacterCard({ character, onFavorite, isFavorite }) {
  const { id, name, status, species, gender, image } = character;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.container} onClick={() => setOpen(true)}>
        <img src={image} alt={name} />
        <h3 className={styles.title}>{name}</h3>

        <div className={styles.infoRow}>
          <Activity size={18} />
          <Circle
            size={12}
            className={
              status === "Alive"
                ? styles.alive
                : status === "Dead"
                  ? styles.dead
                  : styles.unknown
            }
          />
          <span>{status}</span>
        </div>

        <div className={styles.infoRow}>
          <Dna size={18} />
          <span>{species}</span>
        </div>

        <div className={styles.infoRow}>
          <VenusAndMars
            size={18}
            className={
              gender === "Male"
                ? styles.male
                : gender === "Female"
                  ? styles.female
                  : styles.genderUnknown
            }
          />
          <span>{gender}</span>
        </div>

        <button
          className={styles.heartButton}
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(character);
          }}
        >
          <Heart
            size={20}
            className={isFavorite ? styles.favorite : styles.notFavorite}
          />
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={styles.modalContent}>
          <p className={styles.modalSubtitle}>Información Interdimensional</p>

          <img className={styles.modalImage} src={image} alt={name} />

          <h2 className={styles.modalTitle}>{name}</h2>

          <div className={styles.infoRow}>
            <Activity size={18} />

            <Circle
              size={12}
              className={
                status === "Alive"
                  ? styles.alive
                  : status === "Dead"
                    ? styles.dead
                    : styles.unknown
              }
            />

            <span>{status}</span>
          </div>

          <div className={styles.infoRow}>
            <Dna size={18} />
            <span>{species}</span>
          </div>

          <div className={styles.infoRow}>
            <VenusAndMars
              size={18}
              className={
                gender === "Male"
                  ? styles.male
                  : gender === "Female"
                    ? styles.female
                    : styles.genderUnknown
              }
            />
            <span>{gender}</span>
          </div>

          <button className={styles.closeButton} onClick={() => setOpen(false)}>
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  );
}
