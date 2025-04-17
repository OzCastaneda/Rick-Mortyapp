// App.js - Versión simplificada sin componentes adicionales
import { useState } from "react";
import imageRickMorty from "./img/rick-morty.png";
import "./App.css";

/**
 * Componente principal de la aplicación Rick & Morty
 * Gestiona el estado global y la obtención de datos de la API
 */
function App() {
  // Estado para almacenar los personajes
  const [characters, setCharacters] = useState(null);
  // Estado para manejar carga de datos
  const [loading, setLoading] = useState(false);
  // Estado para manejar errores
  const [error, setError] = useState(null);

  /**
   * Función para obtener personajes de la API
   */
  const reqApi = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const api = await fetch("https://rickandmortyapi.com/api/character");
      
      if (!api.ok) {
        throw new Error(`Error al cargar datos: ${api.status}`);
      }
      
      const characterApi = await api.json();
      console.log(characterApi);
      setCharacters(characterApi.results);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para renderizar personajes
  const renderCharacters = () => {
    return (
      <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={() => setCharacters(null)}>Volver a home</span>
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
        <span className="back-home" onClick={() => setCharacters(null)}>Volver a home</span>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header"> 
        <h1 className="App-title">Rick & Morty</h1>

        {/* Mostrar indicador de carga durante la carga */}
        {loading && (
          <div className="simple-loader">Cargando personajes...</div>
        )}
        
        {/* Mostrar mensaje de error si existe */}
        {error && (
          <div className="simple-error">{error}</div>
        )}
        
        {/* Renderizado condicional basado en si tenemos personajes o no */}
        {characters ? (
          renderCharacters()
        ) : (
          <>
            <img 
              src={imageRickMorty} 
              alt="Rick & Morty" 
              className="img-home" 
            />
            <button 
              onClick={reqApi} 
              className="btn-search"
              disabled={loading}
            >
              {loading ? 'Cargando...' : 'Buscar personajes'}
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;