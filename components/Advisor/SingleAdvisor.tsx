import { Advisor } from "@/types/Advisor";
import Image from "next/image";
import Link from "next/link";

const SingleAdvisor = ({ advisor }: { advisor: Advisor }) => {
  const { name, image, btnText, id } = advisor;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="flex flex-col items-center justify-center ">
          <div className="relative mr-4 h-[150px] w-full max-w-[150px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-2xl">
            {name}
          </h5>
          {id > 1 ? (
            <div>
              <Link
                href="/"
                className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-6 lg:px-6 xl:px-9"
              >
              {btnText}
              </Link>
            </div>
          ) : (
            <p className="text-xl text-body-color">{btnText}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleAdvisor;
