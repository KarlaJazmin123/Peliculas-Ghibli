export function PeliculaCard({ pelicula }) {
  const { title, image, description, director, release_date, running_time, rt_score } = pelicula;

  return (
    <div className="pelicula-card">
      <img src={image} alt={title} className="pelicula-poster" />

      <div className="pelicula-overlay">
        <p className="pelicula-descripcion">{description}</p>
        <span className={`pelicula-score ${rt_score >= 80 ? 'score-alto' : rt_score >= 60 ? 'score-medio' : 'score-bajo'}`}>
          {rt_score}%
        </span>
      </div>

      <div className="pelicula-info">
        <h3>{title}</h3>
        <p>{director} · {release_date}</p>
        <p>{running_time} min</p>
      </div>
    </div>
  );
}