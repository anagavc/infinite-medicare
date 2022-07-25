import Layout from "../components/Layouts/Layout";
import { PrimaryButton } from "../components/UI/Buttons";
import blogImage from "../images/blog.jpg";
const BlogItem = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center  px-8  lg:px-24  h-full w-full relative bg-pry-50 py-24">
        <div className="w-full bg-pry-50 p-12 drop-shadow rounded flex  flex-col gap-4 justify-center items-center">
          <div className="w- drop-shadow flex justify-center items-center h-full">
            <img
              src={blogImage}
              alt="item"
              className="w-full lg:w-3/5 h-auto p-4 lg:p-8 bg-sec rounded"
            />
          </div>
          <div className="flex gap-2 lg:space-x-4 justify-center items-center">
            <p className="text-base font-body text-pry-100"> July 18,2022</p>
            <div className="flex space-x-2 items-center justify-center">
              <img
                src={blogImage}
                className="rounded-full w-8 h-8"
                alt="author"
              />
              <p className="text-base font-heading text-purple"> by Paul</p>
            </div>
          </div>
          <h5 className="text-pry-100 text-2xl font-heading font-bold">
            12 Popup Use Cases To Increase Conversions
          </h5>
          <p className="text-base font-body text-pry-100 text-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy.
          </p>
        </div>
        <div className="px-8 lg:px-24 mx-auto w-full mt-6">
          <PrimaryButton
            name="Back"
            path="/blog"
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

export default BlogItem;
