import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const { logout } = useAuth();

  return (
    // <nav
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //     padding: "10px",
    //     backgroundColor: "#222",
    //     color: "white"
    //   }}
    // >
    <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 25px",
          backgroundColor: "#111827",
          color: "white",
          marginBottom: "20px"
        }}
    >
      <div>
            {/* <Link
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
            </Link> */}
            <Link
              to="/"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Home
            </Link>
          
            <Link
              to="/favourites"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold"
                }}
            >
            Favourites
        </Link>
      </div>

      {/* <button onClick={logout}>
        Logout
      </button> */}
      <button
        onClick={logout}
        style={{
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
     >
    Logout
</button>
    </nav>
  );
}