import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { useFavourites } from "../context/FavouritesContext";

export default function FavouritesPage() {

  const { favourites } = useFavourites();

  return (
    <>
      <Navbar />

      <h1>Favourites</h1>

      {
        favourites.length === 0
          ? (
            <p>No favourites yet.</p>
          )
          : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px"
              }}
            >
              {favourites.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          )
      }
    </>
  );
}