"use client";
import Navbar from "@/components/layout/Navbar";
import { useToast } from "@/hooks/use-toast";

import { verifyUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const verifyAuth = async () => {
    try {
      const response = await verifyUser();
      if (response.status === 200) {
        // console.log("response: ", response);
        return;
      }
    } catch (error) {
      // console.error("Error: ", error);

      if (error?.response?.status === 401) {
        toast({
          title: "Login Required",
          description: "Please login to access this page.",
        });
        return router.push("/login");
      }

      if (error?.response?.status === 403) {
        toast({
          title: "Error",
          description: "You do not have permission to access this page",
        });
        return router.push("/unauthorized");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyAuth();
  }, [user, router]);
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
