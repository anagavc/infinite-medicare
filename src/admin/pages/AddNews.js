import app from "../../firebase";
import Input from "../../components/UI/Input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../api/apiCalls";
import { PrimaryButton } from "../../components/UI/Buttons";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const AddNews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    // setIsFetching(true);
    const fileName = new Date().getTime() + data.img[0].name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, data.img[0]);
    uploadTask.on(
      "state_changed",
      (progress) => {
        console.group(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const blog = { ...data, img: downloadURL };
          createBlog(dispatch, blog, navigate);
        });
      }
    );
    reset();
  };
  return (
    <div className="bg-pry-50 flex flex-col px-12 rounded py-6 drop-shadow h-screen">
      <h1 className="text-pry-100 text-center font-heading text-xl font-bold mb-4">
        Add News
      </h1>
      <form
        className="flex flex-col  h-full w-full gap-8 px-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          title="Image"
          textColor="pry-100"
          inputName="img"
          placeholder="Upload Image"
          type="file"
          register={register}
          errors={errors}
        />
        <Input
          title="Title"
          textColor="pry-100"
          inputName="title"
          placeholder="Enter the title of the news item"
          type="text"
          register={register}
          errors={errors}
        />
        <Input
          title="News"
          textColor="pry-100"
          inputName="content"
          placeholder="Enter the details of the news"
          type="text"
          register={register}
          errors={errors}
        />
        <PrimaryButton
          name="Publish"
          bgColor="pry-100"
          textColor="pry-50"
          borderColor="pry-100"
          py="3"
        />
      </form>
    </div>
  );
};

export default AddNews;
