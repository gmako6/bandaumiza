import React from "react";

export const Message = ({ label, placeholder }) => {
  return (
    <>
      <div className="text-sm w-full">
        <label className="text-border font-semibold">{label}</label>
        <textarea
          className="w-full h-40 mt-2 p-6 bg-main border border-border rounded "
          placeholder={placeholder}
        ></textarea>
      </div>
    </>
  );
};

export const Select = ({ label, options, onChange }) => {
  return (
    <>
      <div className="text-sm w-full">
        <label className="text-border font-semibold">{label}</label>
        <select
          className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded "
          onChange={onChange}
        >
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export const Input = ({ label, placeholder, type, bg }) => {
  return (
    <>
      <div className=" text-sm w-full">
        <label className="text-border font-semibold">{label}</label>
        <input
          required
          type={type}
          placeholder={placeholder}
          className={`w-full text-sm mt-2 p-4 border border-border rounded text-white ${
            bg ? "bg-main" : "bg-dry"
          }`}
        />
      </div>
    </>
  );
};
