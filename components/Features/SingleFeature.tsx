import { Feature } from "@/types/feature";

const SingleFeature = ({ university }: { university: Feature }) => {
  const { image, title } = university;
  return (
    <div className=" w-full">
      <div
        className=" border-slate-700 wow fadeInUp border-2  dark:border-2"
        data-wow-delay=".15s"
      >
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${image})`,
              opacity: 0.5,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative z-10 p-6">
            <h2 className="mb-2 text-2xl dark:text-white text-slate-800 font-semibold ">{title}</h2> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
