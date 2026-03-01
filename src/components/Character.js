function Character(character) {
    return <div className="col-3">
        <div className="card" style={{ marginBottom: "3rem" }}>
            <img className="card-img-top" src={character.image} alt={character.name} />
            <div className="card-body" style={{ padding: "0.5rem" }}>
                <h3 className="card-title">{character.name}</h3>
                <p>{character.origin.name}</p>
            </div>
        </div>
    </div>
};

export default Character;