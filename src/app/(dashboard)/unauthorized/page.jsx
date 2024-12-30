import Image from "next/image";
import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <div>
      <section className="mb-10 mt-10 flex w-full flex-col items-center justify-center px-4 pt-2 md:px-20 lg:px-40">
        <Image
          src="/images/warning.svg"
          alt="Unauthorized"
          width={250}
          height={250}
          className="mb-12"
        />
        <h1 className="mb-4 text-3xl font-bold capitalize">Unauthorized</h1>
        <p className="mb-8 text-slate-600">
          You are not authorized to access this page.
        </p>
        <Link
          href="/"
          alt="Link to Home Page"
          className="rounded-lg bg-brand-950 px-4 py-2 font-medium text-white transition duration-300 hover:bg-brand-600 active:bg-brand-700"
        >
          Go Back
        </Link>
      </section>
    </div>
  );
};

export default UnauthorizedPage;
