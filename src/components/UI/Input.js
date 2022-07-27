const Input = ({
  inputName,
  title,
  type,
  placeholder,
  options,
  register,
  errors,
  errorColor,
  textColor,
}) => {
  const inputStyle = `px-4  py-2  placeholder:text-pry-100 text-pry-100 bg-pry-50 border border-pry-100  focus:outline-none  focus:border-sec transition focus:ring-sec focus:ring-1 duration-300 w-full`;
  return (
    <>
      {type === "select" ? (
        <div className="flex flex-col w-full" key={inputName}>
          <label
            htmlFor={inputName}
            className={`text-base text-${textColor} font-body`}
          >
            {title}
          </label>
          <select
            className={inputStyle}
            name={inputName}
            id={inputName}
            {...register(inputName, {
              required: `${title} is required`,

              message: `${title} must be selected`,
            })}
          >
            {options?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="flex flex-col w-full" key={inputName}>
          <label
            htmlFor={inputName}
            className={`text-base text-${textColor} font-body`}
          >
            {title}
          </label>
          <input
            placeholder={placeholder}
            name={inputName}
            type={type}
            className={inputStyle}
            autoComplete="off"
            id={inputName}
            {...register(inputName, {
              required: `${title} is required`,
              minLength: {
                value: 4,
                message: `${title} must be more than 4 characters`,
              },
            })}
          />
          <p
            className={` ${
              errorColor && errorColor
            } text-pry-100 font-normal text-sm font-body`}
          >
            {errors[inputName] && errors[inputName]?.message}
          </p>
        </div>
      )}
    </>
  );
};

export default Input;
