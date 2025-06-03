import React from "react";

const variants = {
  primary: "bg-green-500 text-white",
  secondary: "bg-blue-500 text-white",
  danger: "bg-red-500 text-white",
  success: "bg-green-200 text-white",
};

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-1 text-base",
  lg: "px-6 py-3 text-lg",
};

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: keyof typeof variants;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const Button = ({
  type,
  variant = "primary",
  children,
  onClick,
  size = "md",
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        className={`${variants[variant]} ${sizes[size]} rounded cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
