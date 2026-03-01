import { useState, useEffect } from "react";
import Character from "./Character";

function List() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const { results } = await response.json();
            setCharacters(results);
            setLoading(false);
        }

        fetchCharacters();
    }, [characters.length]);
        
    return (
        <>
            <h2>Characters</h2>
            {loading ? <p>Loading...</p> : characters.map((character) => (
                <Character key={character.id} name={character.name} origin={character.origin} image={character.image} />
            ))}
        </>
    );
}

export default List;