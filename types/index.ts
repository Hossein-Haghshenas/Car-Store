import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
