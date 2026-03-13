import { useState } from "react";
import "./Dashboard.css";

function Dashboard({ username, onLogout }) {
  const [movie, setMovie] = useState("");
  const [movieData, setMovieData] = useState(null);

  const searchMovie = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?t=${movie}&apikey=39bbd69`,
    );

    const data = await response.json();

    if (data.Response === "True") {
      setMovieData(data);
    } else {
      alert("Movie not found");
      setMovieData(null);
    }
  };

  return (
    <div className="dashboard">
      <h2>Welcome {username}</h2>
      <button onClick={onLogout}>Logout</button>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter movie name"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <button onClick={searchMovie}>Search</button>
      </div>

      {movieData && (
        <div className="movie-card">
          <h3>{movieData.Title}</h3>
          <img src={movieData.Poster} alt={movieData.Title} />
          <p>
            <b>Year:</b> {movieData.Year}
          </p>
          <p>
            <b>Genre:</b> {movieData.Genre}
          </p>
          <p>
            <b>Plot:</b> {movieData.Plot}
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
