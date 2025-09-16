import React from "react";

export interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button style={{ padding: "8px 12px" }}>{label}</button>;
};
