import { useForm } from "react-hook-form";
import Input from "../../components/UI/Input";
import { PrimaryButton } from "../../components/UI/Buttons";

import axios from "axios";
import { useState } from "react";

const AddNews = () => {
  const [isFetching, setisFetching] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    setisFetching(true);
    try {
      const res = await axios.post("/api/contact/info", { data });
      setisFetching(false);
      reset();
      //   toast.success(`Your request has been sent,we will get back to you soon.`);
    } catch (error) {
      console.log(error);
      setisFetching(false);
    }
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
          inputName="news"
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
