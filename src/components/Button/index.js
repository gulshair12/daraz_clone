import React from "react";

const variants = {
  primary:
    "bg-indigo-600 text-white hover:enabled:bg-indigo-700 focus:ring-indigo-500",
  secondary: "bg-white text-primary hover:enabled:bg-primary hover:text-white focus:ring-primary border !border-primary",
  tertiary: "hover:bg-black/10 rounded-lg px-3 py-2 !shadow-none",
  naked: "!shadow-none",
  signup: "rounded-md text-white font-semibold bg-orange min-[320px]:px-1 min-[320px]:py-1 sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 xl:px-6 xl:py-2",
};

const sizes = {
  small: "px-2 py-1 text-base leading-1",
  medium: "px-4 py-2 text-md",
  large: "px-4 py-2 text-lg",
};

export const Button = ({
  className = "",
  variant = "primary",
  size = "small",
  children,
  ...props
}) => {
  return (
    <button
      className={`inline-flex justify-center items-center border border-transparent
            rounded-md font-medium shadow-sm focus:outline-none focus:ring-0 focus:ring-offset-0
            disabled:opacity-50 disabled:cursor-not-allowed transition-normal ${className} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};
