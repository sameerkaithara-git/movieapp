import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const { logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#222",
        color: "white"
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "15px"
          }}
        >
          Home
        </Link>

        <Link
          to="/favourites"
          style={{
            color: "white"
          }}
        >
          Favourites
        </Link>
      </div>

      <button onClick={logout}>
        Logout
      </button>
    </nav>
  );
}