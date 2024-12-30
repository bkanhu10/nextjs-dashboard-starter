import Image from "next/image";

const NoProductFound = ({ heading, description }) => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-4 text-center md:px-8">
      <Image
        src="/images/something_wrong.svg"
        alt="Image of a person holding a x sign, that denote Something Went Wrong."
        height={180}
        width={180}
        className="mb-8"
      />
      <h2 className="mb-4 text-2xl font-semibold">{heading}</h2>
      <p className="pb-20 text-lg font-normal">{description}</p>
    </div>
  );
};

export default NoProductFound;
