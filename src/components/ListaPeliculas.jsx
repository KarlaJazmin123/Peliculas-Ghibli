import { PeliculaCard } from './PeliculaCard';

export function ListaPeliculas({ peliculas }) {
  if (peliculas.length === 0) {
    return <p className="sin-resultados">No se encontraron películas</p>;
  }

  return (
    <div className="peliculas-grid">
      {peliculas.map((pelicula) => (
        <PeliculaCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
}