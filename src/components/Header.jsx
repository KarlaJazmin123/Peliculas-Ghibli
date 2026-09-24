export function Header({ busqueda, setBusqueda, directorSeleccionado, setDirectorSeleccionado, peliculas }) {
  const directoresUnicos = [...new Set(peliculas.map((pelicula) => pelicula.director))];

  return (
    <header className="header">
      <h1>Películas de Studio Ghibli</h1>

      <div className="controles">
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="buscador"
        />

        <select
          value={directorSeleccionado}
          onChange={(e) => setDirectorSeleccionado(e.target.value)}
          className="filtro-director"
        >
          <option value="">Todos los directores</option>
          {directoresUnicos.map((director) => (
            <option key={director} value={director}>
              {director}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}