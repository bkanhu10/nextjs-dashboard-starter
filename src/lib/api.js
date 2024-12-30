import axios from "axios";

const API_URI = process.env.NEXT_PUBLIC_API_URI;

/***************************************************************************
 * Authentication
 **************************************************************************/
const login = async (email, password) => {
  const response = await axios.post(
    `${API_URI}/auth/login/admin`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
const verifyUser = async () => {
  const response = await axios.post(
    `${API_URI}/auth/me/admin`,
    {},
    {
      withCredentials: true,
    }
  );
  return response;
};
const logout = async () => {
  const response = await axios.post(
    `${API_URI}/auth/logout/admin`,
    {},
    {
      withCredentials: true,
    }
  );
  return response;
};

const adminForgotPassword = async () => {};
const adminResetPassword = async () => {};

export { adminForgotPassword, adminResetPassword, login, logout, verifyUser };
