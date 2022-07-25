import { newsItem } from "../utilities/newsItem";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-pry-50 flex flex-col space-y-12 px-8 lg:px-24 w-full h-full py-24 ">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-pry-100 text-3xl font-bold font-heading text-center">
          Blog
        </h3>

        <p className="font-heading text-base text-pry-100 text-center ">
          Here are some of the latest news at Infinite Medicare
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between gap-8 h-full ">
        {newsItem.slice(0, 3).map((item, index) => (
          <div
            className="flex flex-col px-6 py-8 bg-pry-100 w-full lg:w-3/6 drop-shadow rounded space-y-4"
            key={index}
          >
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
  );
};

export default Blog;
