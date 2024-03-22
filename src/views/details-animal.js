import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const apiKey = "e2284567c82bd996404acdf47ee3ff17";

export default function DetailAnimal() {
  const { idFilm } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchFilmDetails = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${apiKey}&language=fr-FR`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setFilm(data);
        })
        .catch((error) => {
          console.error("Error fetching film details:", error);
        });
    };

    fetchFilmDetails();
  }, [idFilm]);

  return (
    <div>
      <h3>Detail d'un film</h3>
      {film && (
        <>
          <img
            width="100px"
            src={"https://image.tmdb.org/t/p/w500/" + film.poster_path}
            alt={film.title}
          />
          <h2>{film.title}</h2>
          <p>{film.overview}</p>
        </>
      )}
    </div>
  );
}
