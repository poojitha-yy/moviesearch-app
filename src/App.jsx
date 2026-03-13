import { useState } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState("");
  const [movieData, setMovieData] = useState(null);

  const API_KEY = "39bbd69";

  const searchMovie = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`,
    );

    const data = await response.json();

    if (data.Response === "True") {
      setMovieData(data);
    } else {
      setMovieData(null);
      alert("Movie not found!");
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      <input
        type="text"
        placeholder="Enter movie name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />

      <button onClick={searchMovie}>Search</button>

      {movieData && (
        <div className="movie-card">
          <h2>{movieData.Title}</h2>
          <p>Year: {movieData.Year}</p>
          <p>Genre: {movieData.Genre}</p>
          <img src={movieData.Poster} alt={movieData.Title} />
        </div>
      )}
    </div>
  );
}
export default App;
