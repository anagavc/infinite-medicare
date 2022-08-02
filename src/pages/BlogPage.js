import Layout from "../components/Layouts/Layout";
import { PrimaryButton } from "../components/UI/Buttons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../utilities/formatDate";
import { FadeUpAnimation } from "../components/UI/Animations";

const BlogPage = () => {
  const newsItem = useSelector((state) => state.blog.blogs);
  return (
    <Layout>
      <div className="w-full flex flex-col bg-pry-50 justify-between  py-12">
        <div className="bg-pry-100 flex justify-center items-center py-8 w-full">
          <h1 className="text-pry-50 text-2xl font-heading font-bold text-center">
            {" "}
            Latest News
          </h1>
        </div>
        <FadeUpAnimation className="flex flex-col lg:flex-row w-full justify-between items-center gap-8 h-full flex-wrap px-8 lg:py-12 lg:px-24 mt-6 lg:mt-0">
          {newsItem.map((item, index) => (
            <div
              className="flex flex-col px-6 py-8 bg-pry-100 w-full lg:w-2/5 drop-shadow rounded gap-4"
              key={index}
            >
              <div className="w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full bg-sec h-2/5 lg:h-64 rounded p-4  drop-shadow-lg"
                />
              </div>

              <p className="text-base text-pry-50 uppercase font-body">
                {formatDate(item.createdAt)}
              </p>
              <h6 className="text-sec font-body text-lg font-semibold border-b-2 border-sec">
                {item.title}
              </h6>
              <p className="text-justify text-pry-50 text-base font-heading font-light">
                {item.content.substring(0, 500) + `....`}
              </p>
              <NavLink
                to={`${item._id}`}
                className="flex space-x-2 w-full items-center  text-base  text-sec hover:text-pry-50 font-body transition duration-300"
              >
                <span className="h-1 w-20 bg-sec hover:bg-pry-50 transition duration-300"></span>
                <p>Read more</p>
              </NavLink>
            </div>
          ))}
        </FadeUpAnimation>
        <div className="px-8 lg:px-24 mx-auto w-full mt-6">
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

export default BlogPage;
