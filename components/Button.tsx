// types
import { ButtonProps } from "@/types";

const Button = ({ title, containerStyles, onClick }: ButtonProps) => {
  return (
    <button disabled={false} type={"button"} className={`custom-btn ${containerStyles && containerStyles}`} onClick={onClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
