import React from "react";
import { newsItem } from "../utilities/newsItem";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-pry-50 flex flex-col space-y-12 px-24 w-full h-full py-24 ">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-pry-100 text-3xl font-bold font-heading text-center">
          Blog
        </h3>

        <p className="font-heading text-base text-pry-100 ">
          Here are some of the latest news at Infinite Medicare
        </p>
      </div>

      <div className="flex w-full justify-between gap-8 h-full ">
        {newsItem.slice(0, 3).map((item, index) => (
          <div
            className="flex flex-col p-6 bg-pry-100 w-2/6 drop-shadow rounded space-y-4"
            key={index}
          >
            <p className="text-xs text-pry-50 uppercase font-heading">
              {item.date}
            </p>
            <h6 className="text-sec font-body text-xl font-semibold">
              {item.title}
            </h6>
            <p className="text-justify text-pry-50 text-xs font-heading font-light">
              {item.content}
            </p>
            <NavLink
              to={`${index}`}
              className="flex space-x-2 w-full items-center  text-base uppercase text-sec hover:text-pry-50 font-heading transition duration-300"
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
