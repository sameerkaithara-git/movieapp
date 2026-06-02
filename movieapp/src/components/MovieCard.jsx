// export default function MovieCard({ movie }) {
//   return (
//     <div className="border rounded p-4">

//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie.title}
//         width="200"
//       />

//       <h3>{movie.title}</h3>

//       <p>
//         {movie.overview.length > 100
//           ? movie.overview.substring(0, 100) + "..."
//           : movie.overview}
//       </p>

//       <button>
//         Add to Favourites
//       </button>

//     </div>
//   );
// }

import { imgUrl } from "../lib/tmdb";
import { useFavourites } from "../context/FavouritesContext";


export default function MovieCard({ movie }) {

 // const { addFavourite } = useFavourites();

 const {
  addFavourite,
  removeFavourite,
  isFavourite
} = useFavourites();

const favourite = isFavourite(movie.id);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "250px"
      }}
    >
      {movie.poster_path && (
        <img
          src={imgUrl(movie.poster_path)}
          alt={movie.title}
          width="100%"
        />
      )}

      <h3>{movie.title}</h3>

      <p>
        {movie.overview
          ? movie.overview.substring(0, 100) + "..."
          : "No description"}
      </p>

      {/* <button>
        Add To Favourites
      </button> */}
        
        {/* <button
        onClick={() =>
          addFavourite(movie)
        }>

 Add To Favourites
</button> */}

    {
      favourite ? (
      
        <button
          onClick={() =>
            removeFavourite(movie.id)
          }
        >
          Remove Favourite
        </button>
    
      ) : (
      
        <button
          onClick={() =>
            addFavourite(movie)
          }
        >
          Add To Favourites
        </button>
    
      )
    }
    </div>
  );
}