"use client";
import { useAuth } from "@/app/context/AuthContext";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { login } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../ui/Button";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { handleLogin } = useAuth(); // Get handleLogin from AuthContext

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   console.log(formData);
  //   try {
  //     const res = await login(formData.email, formData.password);
  //     console.log("Calling");
  //     console.log(res);
  //     if (res.status === 200) {
  //       console.log("Login successful");
  //       const { role } = res.data.data;
  //       console.log(role);

  //       switch (role) {
  //         case "super-admin":
  //           // Handle super admin login
  //           router.push("/super-admin");

  //           break;

  //         case "admin":
  //           // Handle admin login
  //           router.push("/admin");

  //           break;

  //         case "product-manager":
  //           // Handle product manager login
  //           router.push("/pm");

  //           break;

  //         case "quality-assurance":
  //           // Handle quality assurance login
  //           router.push("/qa");

  //           break;

  //         default:
  //           // Handle unknown role
  //           router.push("/");
  //           break;
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     const errorMessage = error.response.data.message;
  //     if (error.status === 500) {
  //       alert("Something went wrong. Please try again later.");
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await login(formData.email, formData.password);
      if (res.status === 200) {
        const userData = res.data.data; // This should contain role and other info

        // Call handleLogin to set the user globally in context
        handleLogin(userData);
      }
    } catch (error) {
      console.error("Login error", error);
      const errorMessage = error.response?.data?.message || "Login failed";
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <Link
            href="/forgot-password"
            alt="Link to JashCeramic Website"
            className="mt-1 flex items-center justify-end text-sm font-medium text-brand-900"
          >
            Forgot Password?
          </Link>
        </div>
        <Button type="submit" isLoading={isLoading}>
          Login
        </Button>
        <div></div>
      </form>
      <div></div>
    </>
  );
};

export default LoginForm;
