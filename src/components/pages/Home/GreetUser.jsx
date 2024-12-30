"use client";
import { useAuth } from "@/app/context/AuthContext";

const GreetUser = () => {
  const { user } = useAuth();

  return (
    <section className="mb-10 mt-10 w-full px-4 pt-2 md:px-20 lg:px-40">
      <h1 className="mb-4 text-3xl font-bold capitalize">Hello {user?.name}</h1>
      <p className="mb-4 text-slate-600">Welcome to Central.</p>
    </section>
  );
};

export default GreetUser;
