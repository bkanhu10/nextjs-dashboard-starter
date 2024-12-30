"use client";
import { AuthProvider } from "./context/AuthContext";

const AuthLayout = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthLayout;
