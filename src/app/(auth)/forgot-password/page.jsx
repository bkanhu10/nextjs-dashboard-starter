import ForgotPasswordForm from "@/components/forms/ForgotPassword";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
const PasswordResetPage = () => {
  const date = new Date().getFullYear();

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
          <h1 className="mb-2 text-2xl font-semibold">Forgot Password</h1>
          <p className="mb-4 text-base text-gray-700">
            No worries, we&apos;ll send you reset instructions.
          </p>
          <div className="w-full">
            <ForgotPasswordForm />

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
              Example Name
            </Link>
          </p>
        </div>
      </section>
    </Suspense>
  );
};

export default PasswordResetPage;
