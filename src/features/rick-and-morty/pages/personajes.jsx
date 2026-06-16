import { CharacterCard } from "../../../common/components/character-card/character-card";
import { CharacterPagination } from "../../../common/components/character-card/character-pagination";
import { useCharacters } from "../hooks/use-characters";
import styles from "./personajes.module.css";

export function PersonajesPage() {
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

  if (error) return <h1>{error}</h1>;

  //if (loading) return <h1>Loading...</h1>;

  const characters = data.results;

  console.log(characters);

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Personaje interdimensional..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {loading && <p>Cargando...</p>}

      <CharacterPagination
        next={data.info.next}
        prev={data.info.prev}
        onNext={nextPage}
        onPrev={prevPage}
      />

      <div className={styles.container}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onFavorite={toggleFavorite}
            isFavorite={isFavorite(character.id)}
          />
        ))}
      </div>

      <CharacterPagination
        next={data.info.next}
        prev={data.info.prev}
        onNext={nextPage}
        onPrev={prevPage}
      />
    </>
  );
}
