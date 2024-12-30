// context/AuthContext.js
"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const router = useRouter();

  // Fetch role and user data from localStorage on initial load
  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    const savedUser = localStorage.getItem("user");
    if (savedRole) setRole(savedRole);
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Function to handle login and set role globally
  const handleLogin = (userData) => {
    setRole(userData.role);
    setUser(userData);
    localStorage.setItem("userRole", userData.role);
    localStorage.setItem("user", JSON.stringify(userData));
    router.push("/");
  };
  const handleLogout = () => {
    console.log("logout button clicked");
    setUser(null);
    setRole(null);
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <AuthContext.Provider
      value={{ user, setUser, role, setRole, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
