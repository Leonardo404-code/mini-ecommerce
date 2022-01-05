import React from "react";
import { CustomButton } from "./styled";

export function Button({ children, onClick, className, type, disabled }) {
  return (
    <CustomButton
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </CustomButton>
  );
}
