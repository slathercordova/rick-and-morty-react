import { CharacterCard } from "../../../common/components/character-card/character-card";
import { CharacterPagination } from "../../../common/components/character-card/character-pagination";
import { useCharacters } from "../hooks/use-characters"
import styles from "./personajes.module.css"


export function PersonajesPage(){
    const {data, loading, error, nextPage, prevPage, name, setName} = useCharacters();

    if (error) return <h1>{error}</h1>;

    //if (loading) return <h1>Loading...</h1>;

    const characters = data.results;

    console.log(characters);

    return(
        <>
        <h1>Este es la página de personajes</h1>

        <input
        type="text"
        placeholder="Buscar personaje..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

        {loading && <p>Cargando...</p>}

        <CharacterPagination 
        next={data.info.next}
    prev={data.info.prev}
    onNext={nextPage}
    onPrev={prevPage}/>

        <div className={styles.container}>
            {characters.map((character)=>(
            <CharacterCard key={character.id} character={character}/>
        ))}
        </div>
        
        <CharacterPagination 
        next={data.info.next}
    prev={data.info.prev}
    onNext={nextPage}
    onPrev={prevPage}/>
        </>
    );
}