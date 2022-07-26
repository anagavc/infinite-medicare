export const UserActivity = ({ count, name, icon }) => {
  return (
    <div className="flex justify-between bg-pry-50 p-6 rounded drop-shadow w-full lg:w-2/6 ">
      <div className="flex flex-col gap-2 w-3/5">
        <h4 className="text-xl font-body text-pry-100 font-bold">{count}</h4>
        <p className="font-body text-base text-pry-100 ">{name}</p>
      </div>
      <div className="bg-pry-100 p-4 rounded text-pry-50 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};
export const UserInfo = ({ name, icon }) => {
  return (
    <div className="flex  justify-between gap-2 text-pry-100">
      {icon}
      <p className="font-body text-base  text-pry-100 ">{name}</p>
    </div>
  );
};
