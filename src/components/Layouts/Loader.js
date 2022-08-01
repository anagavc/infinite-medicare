import PulseLoader from "react-spinners/PulseLoader";
const Loader = () => {
  let loading = true;
  let color = "#E8FFFF";

  return (
    <div className="bg-pry-100 h-screen space-y-16  flex flex-col  justify-center items-center ">
      <PulseLoader color={color} loading={loading} size={60} />
    </div>
  );
};

export default Loader;
