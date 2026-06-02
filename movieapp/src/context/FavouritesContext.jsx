// import {
//   createContext,
//   useContext,
//   useState
// } from "react";

import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const FavouritesContext =
  createContext();

export const useFavourites =
  () => useContext(FavouritesContext);

export function FavouritesProvider({
  children
}) {

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {

    const saved =
    localStorage.getItem("favourites");

    if (saved) {
      setFavourites(JSON.parse(saved));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );

  }, [favourites]);

  const addFavourite =
    (movie) => {

    const exists =
      favourites.some(
        m => m.id === movie.id
      );

    if (exists) return;

    setFavourites(prev => [
      ...prev,
      movie
    ]);
  };

  const removeFavourite =
    (movieId) => {

    setFavourites(prev =>
      prev.filter(
        movie =>
          movie.id !== movieId
      )
    );
  };

  const isFavourite =
    (movieId) => {

    return favourites.some(
      movie =>
        movie.id === movieId
    );
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}