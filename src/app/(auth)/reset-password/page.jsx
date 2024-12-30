"use client";
import ResetPasswordForm from "@/components/forms/ResetPassword";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
const ResetPasswordPage = () => {
  const date = new Date().getFullYear();
  const searchParams = useSearchParams();
  const router = useRouter();
  //   const { id, resetToken } = searchParams;
  const id = searchParams.get("id");
  const resetToken = searchParams.get("resetToken");
  //   console.log(id, resetToken);
  // if Not found redirect to login
  if (!id || !resetToken) {
    return router.push("/login");
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex h-screen w-full items-center justify-center bg-gray-100">
        <div className="relative rounded border border-gray-200 bg-white p-4 shadow-sm">
          <Link
            href="/"
            alt="Link to  Home page"
            className="absolute -top-16 left-0 right-0 flex items-center justify-center"
          >
            <Image
              src="/jash-ceramic-logo.svg"
              alt=""
              height={200}
              width={200}
              className="h-14 w-14"
            />
          </Link>
          <h1 className="mb-2 text-2xl font-semibold">Reset Password</h1>
          <p className="mb-4 text-base text-gray-700">
            Enter a new password for your account.
          </p>
          <div className="w-full">
            <ResetPasswordForm id={id} resetToken={resetToken} />

            <Link
              href="/login"
              alt="Link to Login Page"
              className="mt-2 flex items-center justify-center px-2 py-2"
            >
              <ChevronLeft className="pr-2" /> Back to
              <span className="pl-2 text-base font-medium text-brand-950 underline underline-offset-4">
                Login
              </span>
            </Link>
          </div>
          <p className="absolute -bottom-20 left-0 right-0 flex items-center justify-center">
            &copy; {date}{" "}
            <Link
              href=""
              alt="Link to  Homepage"
              className="ml-2 text-brand-950 underline underline-offset-4"
            >
              Example Company
            </Link>
          </p>
        </div>
      </section>
    </Suspense>
  );
};

export default ResetPasswordPage;
