import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { BASE_URL, HEADERS } from "../lib/tmdb";
import useDebounce from "../hooks/useDebounce";

export default function HomePage() {

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    // if (!search) return;
    if (!debouncedSearch) return;

    const controller = new AbortController();

    async function searchMovie() {
  try {

    const response = await fetch(
      `${BASE_URL}/search/movie?query=${debouncedSearch}`,
      {
        headers: HEADERS,
        signal: controller.signal
      }
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);

  } catch (error) {

    if (error.name === "AbortError") {
      return;
    }

    console.error(error);
  }
}

    searchMovie();

    return () => {
      controller.abort();
    };

  }, [debouncedSearch]);

  return (
     <>
    <Navbar />

    <div>

      {/* <input
        type="text"
        placeholder="Search Movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> */}


<input
  type="text"
  placeholder="Search Movies..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  style={{
    width: "100%",
    maxWidth: "500px",
    padding: "10px",
    marginBottom: "20px"
  }}
/>

      {/* {movies.map(movie => (
        <div key={movie.id}>
          {movie.title}
        </div>
      ))} */}

      <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "20px"
  }}
>
  {movies.map(movie => (
    <MovieCard
      key={movie.id}
      movie={movie}
    />
  ))}
</div>

    </div>
  </>
  );
}