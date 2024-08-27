import { useState } from "react";

const InputBox = ({ name, type, id, value, placeholder, icon, onChange }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-full mb-4">
      <input
        name={name}
        type={
          type === "password" ? (passwordVisible ? "text" : "password") : type
        }
        defaultValue={value}
        placeholder={placeholder}
        id={id}
        className="input-box w-full p-3 border border-gray-300 rounded-md pl-10 pr-10 focus:outline-none focus:border-dark-green"
        onChange={onChange}
      />
      <i
        className={`fi ${icon} input-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400`}
      ></i>
      {type === "password" && (
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          onClick={() => setPasswordVisible((currentVal) => !currentVal)}
        >
          <i
            className={`fi ${
              passwordVisible ? "fi-rr-eye" : "fi-rr-eye-crossed"
            }`}
          ></i>
        </button>
      )}
    </div>
  );
};

export default InputBox;
