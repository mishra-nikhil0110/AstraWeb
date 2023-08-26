import { Mentor } from "@/types/Mentor";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleMentor = ({ testimonial }: { testimonial: Mentor }) => {
  const { name, image, institute } = testimonial;

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
          <p className="text-xl text-body-color">{institute}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMentor;
