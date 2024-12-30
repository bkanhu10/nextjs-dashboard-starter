import Image from "next/image";

const ErrorMessage = ({ heading, description }) => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-4 md:px-8 lg:px-40">
      <Image
        src="/images/something_wrong.svg"
        alt="Image of a person holding a x sign, that denote Something Went Wrong."
        height={350}
        width={350}
        className="mb-8"
      />
      <h2 className="mb-4 text-2xl font-semibold">{heading}</h2>
      <p className="pb-20 text-lg font-normal">{description}</p>
    </div>
  );
};

export default ErrorMessage;
