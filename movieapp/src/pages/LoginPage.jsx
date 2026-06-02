// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function LoginPage() {

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async () => {

//   try {

//     await login();

//     navigate("/");

//   } catch (error) {

//     console.error(error);

//   }

// };

//   return (
//     <div>
//       <h1>Movie Search App</h1>
//       <button onClick={handleLogin}>
//         Sign In With Google
//       </button>
//     </div>
//   );
// }

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      await login();

      navigate("/");

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <div>

      <h1>Movie Search App</h1>

      <button onClick={handleLogin}>
        Sign In With Google
      </button>

    </div>
  );
}