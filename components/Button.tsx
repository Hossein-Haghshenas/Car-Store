import Image from "next/image";
// types
import { ButtonProps } from "@/types";

const Button = ({
  title,
  containerStyles,
  onClick,
  btnType,
  textStyles,
  rightIcon,
  isDisable,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles && containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
