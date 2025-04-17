// CharacterCard.js - Componente para mostrar cada personaje individualmente
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CharacterCard = memo(function CharacterCard({ character, translateStatus, translateSpecies }) {
  return (
    <div className="character-container">
      <div className="character-image">
        <img
          src={character.image}
          alt={character.name}
          className="img-character"
          loading="lazy" // Mejora el rendimiento cargando imágenes solo cuando son visibles
        />
      </div>
      <div className="character-info">
        <h3>{character.name}</h3>
        <p>
          <span className="text-grey">Especie: </span>
          <span className={character.species.toLowerCase()}>
            {translateSpecies(character.species)}
          </span>
        </p>
        <h6>
          <span className={character.status.toLowerCase()}>
            {translateStatus(character.status)}
          </span>
        </h6>
        <p>
          <span className="text-grey">Episodios: {character.episode.length}</span>
        </p>
        <p>
          <span className="text-grey">Origen: </span>
          {character.origin.name}
        </p>
      </div>
    </div>
  );
});

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  translateStatus: PropTypes.func.isRequired,
  translateSpecies: PropTypes.func.isRequired
};

export default CharacterCard;

// Loader.js - Componente para mostrar durante la carga

function Loader() {
  return (
    <div className="loader">
      <div className="loader-spinner"></div>
      <p>Cargando personajes...</p>
    </div>
  );
}

export { Loader };

// ErrorMessage.js - Componente para mostrar errores
// Removed duplicate import of React

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <p>¡Oops! Algo salió mal:</p>
      <p>{message}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export { ErrorMessage };