import styles from "../../rick-and-morty/pages/personajes.module.css";
import styles2 from "../../../features/favoritos/pages/favoritos.module.css";
import { CharacterCard } from "../../../common/components/character-card/character-card";
import { useCharacters } from "../../rick-and-morty/hooks/use-characters";
import { HeartCrack } from "lucide-react";

export function FavoritosPage() {
  const charactersFav = JSON.parse(localStorage.getItem("favorites")) || [];

  const {
    data,
    loading,
    error,
    nextPage,
    prevPage,
    name,
    setName,
    favorites,
    toggleFavorite,
    isFavorite,
  } = useCharacters();

  if (charactersFav.length === 0) {
    return (
      <div className={styles2.emptyState}>
        <div className={styles2.portal}>🌀</div>
        <h1>Tu colección está vacía</h1>{" "}
        <HeartCrack size={80} color="#a3e635" />
        <p>Aún no has marcado ningún personaje como favorito.</p>
        <p>Explora el multiverso y guarda tus personajes preferidos ❤️</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Colección Interdimensional</h1>

      <div className={styles.container}>
        {charactersFav.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onFavorite={toggleFavorite}
            isFavorite={isFavorite(character.id)}
          />
        ))}
      </div>
    </div>
  );
}
