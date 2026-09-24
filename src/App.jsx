import { useState } from 'react';
import { usePeliculas } from './hooks/usePeliculas';
import { Header } from './components/Header';
import { ListaPeliculas } from './components/ListaPeliculas';
import './App.css';

function App() {
  const { peliculas, cargando, error } = usePeliculas();
  const [busqueda, setBusqueda] = useState('');
  const [directorSeleccionado, setDirectorSeleccionado] = useState('');

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const coincideTitulo = pelicula.title
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideDirector =
      directorSeleccionado === '' || pelicula.director === directorSeleccionado;

    return coincideTitulo && coincideDirector;
  });

  if (cargando) {
    return <p className="mensaje-estado">Cargando películas...</p>;
  }

  if (error) {
    return <p className="mensaje-estado error">Error: {error}</p>;
  }

  return (
    <div className="app">
      <Header
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        directorSeleccionado={directorSeleccionado}
        setDirectorSeleccionado={setDirectorSeleccionado}
        peliculas={peliculas}
      />
      <ListaPeliculas peliculas={peliculasFiltradas} />
    </div>
  );
}

export default App;