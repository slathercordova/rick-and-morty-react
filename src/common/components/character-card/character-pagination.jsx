import styles from "./character-pagination.module.css";

export function CharacterPagination({ next, prev, onNext, onPrev }) {
  return (
    <div className={styles.pagination}>
      <button disabled={!prev} onClick={onPrev}>
        Previous
      </button>

      <button disabled={!next} onClick={onNext}>
        Next
      </button>
    </div>
  );
}
