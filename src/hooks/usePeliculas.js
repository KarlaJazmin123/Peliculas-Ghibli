import { useState, useEffect } from 'react';

const API_URL = 'https://ghibliapi.vercel.app/films';

export function usePeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerPeliculas() {
      try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
          throw new Error('No se pudieron obtener las películas');
        }

        const datos = await respuesta.json();
        setPeliculas(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerPeliculas();
  }, []);

  return { peliculas, cargando, error };
}