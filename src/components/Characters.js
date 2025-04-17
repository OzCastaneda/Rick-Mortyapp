// Guarda este archivo como Characters.js (no Characteres.js) en la carpeta src/components/
import React from 'react';

export default function Characters(props) {
  const { characters, setCharacters } = props;
  
  const resetCharacters = () => {
    setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver a home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img
                src={character.image}
                alt={character.name}
                className="img-character"
              />
            </div>
            <div>
              <h3>{character.name}</h3>
              <p>
                <span className="text-grey">Especie: </span>
                {character.species === "Human" ? (
                    <span className="human">Humano</span>
                    ) : character.species === "Alien" ? (
                    <span className="alien">Alien</span>
                    ) : character.species === "Mythological Creature" ? (
                    <span className="mythological">Criatura mitológica</span>
                    ) : (
                    <span className="unknown">Desconocido</span>
                    )}
              </p>
              <h6>
                {character.status === "Alive" ? (
                  <span className="alive">Vivo</span>
                ) : character.status === "Dead" ? (
                  <span className="dead">Muerto</span>
                ) : (
                  <span className="unknown">Desconocido</span>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: {character.episode.length}</span>
              </p> 
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver a home</span>
    </div>
  );
}