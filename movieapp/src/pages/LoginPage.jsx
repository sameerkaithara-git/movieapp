import { useAuth } from "../context/AuthContext";

export default function LoginPage() {

  const { login } = useAuth();

  return (
    <div>
      <h1>Movie Search App</h1>

      <button onClick={login}>
        Sign In With Google
      </button>
    </div>
  );
}