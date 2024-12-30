"use client";
import LoginForm from "@/components/forms/LoginForm";
import { useToast } from "@/hooks/use-toast";
import { verifyUser } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
const LoginPage = () => {
  const { user, handleLogout } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const verifyAuth = async () => {
    try {
      const response = await verifyUser();

      if (response.status === 200) {
        return router.push("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        handleLogout();
        toast({
          title: "Login Required",
          description: "Please login to access this page.",
        });
        return router.push("/login");
      }
    }
  };

  useEffect(() => {
    verifyAuth();
    // if (!user) {
    //   toast({
    //     title: "Login Required",
    //     description: "Please login to access this page.",
    //   });
    //   router.push("/login");
    // }
  }, [user, router]);
  return (
    <section className="flex h-dvh w-full items-center justify-center px-4 pt-12 md:px-20 lg:px-40">
      <div className="relative h-auto w-11/12 rounded-md bg-white p-4 shadow md:w-8/12 lg:w-5/12 xl:w-3/12">
        <Image
          src="./jash-ceramic-logo.svg"
          alt="Jash Logo"
          width={200}
          height={200}
          className="absolute -top-16 left-0 right-0 m-auto h-12 w-12"
        />
        <div className="mb-4 space-y-2">
          <h1 className="text-3xl font-semibold text-slate-950">Log in</h1>
          <p className="text-slate-600">Welcome to Central.</p>
        </div>
        <LoginForm />
        <p className="mt-4 text-sm text-slate-600">
          Powered by{" "}
          <Link
            href="https://skentino.tech"
            alt="Link to Skentino Tech Website"
            className="text-brand-950 underline underline-offset-4"
          >
            SkentinoTech
          </Link>
          .
        </p>
      </div>
      <p className="absolute bottom-10 text-center text-sm font-medium">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="https://example.com" alt="Link to example Website">
          Example Company
        </Link>
      </p>
    </section>
  );
};

export default LoginPage;
