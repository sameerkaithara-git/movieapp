export const BASE_URL =
  "https://api.themoviedb.org/3";

export const HEADERS = {
  Authorization:
    `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
};

export const imgUrl = (path) =>
  `https://image.tmdb.org/t/p/w500${path}`;