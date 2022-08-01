import Layout from "../components/Layouts/Layout";
import { PrimaryButton } from "../components/UI/Buttons";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../utilities/formatDate";

const BlogItem = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const news = useSelector((state) => state.blog.blogs);
  const newsItem = news.find((news) => news._id === id);
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center  px-8  lg:px-24  h-full w-full relative bg-pry-50 py-24">
        <div className="w-full bg-pry-50 p-12 drop-shadow rounded flex  flex-col gap-4 justify-center items-center">
          <div className="w- drop-shadow flex justify-center items-center h-full">
            <img
              src={newsItem.img}
              alt="item"
              className="w-full lg:w-3/5 h-auto p-4 lg:p-8 bg-sec rounded"
            />
          </div>
          <div className="flex gap-2 lg:space-x-4 justify-center items-center">
            <p className="text-base font-body text-pry-100">
              {" "}
              {formatDate(newsItem.createdAt)}
            </p>
          </div>
          <h5 className="text-pry-100 text-2xl font-heading font-bold">
            {newsItem.title}
          </h5>
          <p className="text-base font-body text-pry-100 text-justify">
            {newsItem.content}
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
