import { getAllBlogs } from "../api/apiCalls";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { formatDate } from "../utilities/formatDate";
import { useDispatch, useSelector } from "react-redux";
import { FadeUpAnimation } from "../components/UI/Animations";
const Blog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const page = location.pathname.split("/")[0];
  useEffect(() => {
    getAllBlogs(dispatch);
  }, [dispatch, page]);
  const newsItem = useSelector((state) => state.blog.blogs);
  return (
    <div className="bg-pry-50 flex flex-col space-y-12 px-8 lg:px-24 w-full h-full py-24 ">
      <FadeUpAnimation className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-pry-100 text-3xl font-bold font-heading text-center">
          Blog
        </h3>

        <p className="font-heading text-base text-pry-100 text-center ">
          Here are some of the latest news at Infinite Medicare
        </p>
      </FadeUpAnimation>

      <FadeUpAnimation className="flex flex-col lg:flex-row w-full justify-between gap-8 h-full ">
        {newsItem.slice(0, 3).map((item, index) => (
          <div
            className="flex flex-col px-6 py-8 bg-pry-100 w-full lg:w-3/6 drop-shadow rounded space-y-4"
            key={index}
          >
            <p className="text-base text-pry-50 uppercase font-body">
              {formatDate(item.createdAt)}
            </p>
            <h6 className="text-sec font-body text-lg font-semibold border-b-2 border-sec">
              {item.title}
            </h6>
            <p className="text-justify text-pry-50 text-base font-heading font-light">
              {item.content.substring(0, 500) + ` ` + `....`}
            </p>
            <NavLink
              to={`blog/${item._id}`}
              className="flex space-x-2 w-full items-center  text-base  text-sec hover:text-pry-50 font-body transition duration-300"
            >
              <span className="h-1 w-20 bg-sec hover:bg-pry-50 transition duration-300"></span>
              <p>Read more</p>
            </NavLink>
          </div>
        ))}
      </FadeUpAnimation>
    </div>
  );
};

export default Blog;
