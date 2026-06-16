import styles from "./character-card.module.css"

export function CharacterCard({character}){
    const{
        id,
        name,
        status,
        species,
        gender,
        image
    } = character;

    return(
        <div className={styles.container}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
        </div>
    );
}