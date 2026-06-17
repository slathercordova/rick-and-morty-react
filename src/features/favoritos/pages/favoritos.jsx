import styles from "../../rick-and-morty/pages/personajes.module.css";
import styles2 from "../../../features/favoritos/pages/favoritos.module.css";
import { CharacterCard } from "../../../common/components/character-card/character-card";
import { useCharacters } from "../../rick-and-morty/hooks/use-characters";
import { HeartCrack } from "lucide-react";
import portalImg from "../../../common/images/imagen7.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
      <>
      <div className={styles2.emptyState}>
        <img src={portalImg} alt="portal girando" className={styles2.portal} />
        <h1>Sin favoritos en esta dimensión</h1>
        <HeartCrack size={80} color="#a3e635" />
        <p>Parece que aún no has encontrado personajes dignos de viajar contigo por el multiverso...</p>
        <p>Visita la sección <Link to="/personajes" className={styles2.goToCharacters}>Personajes</Link> y marca tus personajes preferidos ❤️</p>
      </div>
      </>
    );
  }

  return (
    <div>
      <h1 className={styles2.pageTitle}>Colección Interdimensional</h1>

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
