import { FC } from "react";
import { buttonProps } from "@/types/interfaces";

export const Buttton: FC<buttonProps> = ({
  variants = "primary",
  children,
}) => {
  return (
    <div>
      
      <button
        className={`btn ${
          variants === "primary"
            ? "btn-primary"
            : variants === "secandary"
            ? "btn-secanrsy"
            : "btn-outline"
        }`}
      >{children}</button>
      
    </div>
  );
};
