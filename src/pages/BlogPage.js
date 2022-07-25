import Layout from "../components/Layouts/Layout";
import { newsItem } from "../utilities/newsItem";
import { NavLink } from "react-router-dom";
const BlogPage = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col bg-pry-50 justify-between  py-12">
        <div className="bg-pry-100 flex justify-center items-center py-8 w-full">
          <h1 className="text-pry-50 text-2xl font-heading font-bold text-center">
            {" "}
            Latest News
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-8 h-full flex-wrap px-8 lg:px-12 p-12">
          {newsItem.map((item, index) => (
            <div
              className="flex flex-col px-6 py-8 bg-pry-100 w-full lg:w-96 drop-shadow rounded space-y-4"
              key={index}
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full bg-sec h-2/5 lg:h-64 rounded p-4  drop-shadow-lg"
                />
              </div>

              <p className="text-base text-pry-50 uppercase font-body">
                {item.date}
              </p>
              <h6 className="text-sec font-body text-lg font-semibold border-b-2 border-sec">
                {item.title}
              </h6>
              <p className="text-justify text-pry-50 text-base font-heading font-light">
                {item.content}
              </p>
              <NavLink
                to={`${index}`}
                className="flex space-x-2 w-full items-center  text-base  text-sec hover:text-pry-50 font-body transition duration-300"
              >
                <span className="h-1 w-20 bg-sec hover:bg-pry-50 transition duration-300"></span>
                <p>Read more</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
