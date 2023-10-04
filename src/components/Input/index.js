import React from "react";

export const Input = ({
  type,
  name,
  value,
  inputId,
  defaultValue,
  placeholder,
  label,
  helperText,
  onChange,
  error,
  classes = "",
  ...props
}) => {
  if (type === "radio") {
    return (
      <div className="flex gap-3 items-center">
          <input type="radio" className="radio-button" value={value} name={name} id={inputId} />
          {label && <label className="block text-base text-white font-bold" htmlFor={inputId}>{label}</label>}
      </div>
    )
  }

  return (
    <div>
      {label && (
        <label className="block text-sm text-white font-bold mb-2">
          {label}
        </label>
      )}

      {helperText && (
        <label className="block text-sm text-gray-600">{helperText}</label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        id={inputId}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:ring-0 focus:shadow-outline ${classes}`}
        {...props}
      />

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};
