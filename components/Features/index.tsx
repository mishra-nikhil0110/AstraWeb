import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import universityData from "./universityData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle title="Team Page" paragraph=" Learn from scientists, research scholars from the top institutes in the world. " center />

          <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {universityData.map((university) => (
              <SingleFeature key={university.id} university={university} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
