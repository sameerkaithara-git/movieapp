import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth, provider } from "../lib/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const login = () => {
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(auth, currentUser => {

        setUser(currentUser);

        setLoading(false);
      });

    return unsubscribe;

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}