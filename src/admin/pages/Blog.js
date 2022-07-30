import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { formatDate } from "../../utilities/formatDate";
import { getAllBlogs } from "../../api/apiCalls";
import { DeleteForever } from "@mui/icons-material";
import { UpdateBlogDialog } from "../../components/Layouts/Modal";
const Blog = () => {
  const dispatch = useDispatch();
  const [blogId, setBlogId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    getAllBlogs(dispatch);
  }, [dispatch]);
  const newsItem = useSelector((state) => state.blog.blogs);
  return (
    <>
      {modalType === "update" && (
        <UpdateBlogDialog
          blogId={blogId}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <div className="w-full flex flex-col bg-pry-50 justify-between  py-2">
        <h1 className="text-pry-100 text-center font-heading text-xl font-bold mb-4">
          News Item
        </h1>
        <button className="flex w-96 mb-4 justify-center items-center  text-base bg-pry-100  text-pry-50 hover:bg-sec hover:text-pry-100 rounded p-4  font-body transition duration-300">
          Post new article
        </button>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-2 h-full flex-wrap">
          {newsItem?.map((item, index) => (
            <div
              className="flex flex-col p-4 bg-pry-100 w-full lg:w-96 drop-shadow rounded space-y-4"
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
                {item.content}
              </p>
              <button
                onClick={() => {
                  setBlogId(item._id);
                  setModalType("update");
                  setShowModal(true);
                }}
                className="flex w-full justify-center items-center  text-base bg-sec  text-pry-50 hover:bg-pry-50 rounded p-4 hover:text-pry-100 font-body transition duration-300"
              >
                Edit
              </button>
              <button className="flex w-full justify-center items-center  text-base   text-red-400 hover:text-red-600 rounded font-body transition duration-300">
                <DeleteForever />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
