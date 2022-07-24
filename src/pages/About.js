import ambulance from "../images/ambulance.jpg";
import Layout from "../components/Layouts/Layout";
import Staff from "../sections/Staff";
import { PrimaryButton } from "../components/UI/Buttons";

const About = () => {
  return (
    <Layout>
      <div className="h-full flex flex-col justify-between pb-24 gap-4 pt-32  bg-pry-50">
        <div className="w-full px-24 flex flex-col justify-between gap-4">
          <h1 className="text-3xl font-heading text-pry-100 font-bold ">
            About Infinite Medicare
          </h1>
          <div className="flex space-x-16 w-full items-center drop-shadow p-8 rounded bg-pry-50">
            <div className="w-2/5 flex justify-between flex-wrap">
              <img
                src={ambulance}
                alt="ambulance"
                className="bg-pry-100 p-8 rounded w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-4 w-3/5">
              <h3 className="text-xl font-heading text-pry-100 font-bold">
                Providing An Exceptional Healthcare Service
              </h3>
              <p className="text-lg font-body text-pry-100">
                25 Years Of Exceptional Healthcare Service
              </p>
              <p className="text-base font-body text-pry-100 text-justify">
                The mission of Infinite Medicare is to improve the health of the
                community and the world by setting the standard of excellence in
                medical education, research and clinical care. Diverse and
                inclusive, Infinite Medicare: Educates medical students,
                scientists, health care professionals and the public. Conducts
                biomedical research. Provides patient-centered medicine to
                prevent, diagnose and treat human illness.
              </p>
              <p className="text-base font-body text-pry-100 text-justify">
                Our patients come from all over the world — and so do our staff
                members. They come to be part of a professional and diverse
                health care team; to work beside the unequaled talent of
                Infinite Medicare physicians, nurses and providers; and to enjoy
                extensive benefits and opportunities for personal and
                professional growth.
              </p>
            </div>
          </div>
        </div>

        <Staff />
        <div className="px-24 mx-auto w-full">
          <PrimaryButton
            name="Back"
            path="/"
            bgColor="pry-100"
            textColor="pry-50"
            borderColor="pry-100"
            py="4"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
