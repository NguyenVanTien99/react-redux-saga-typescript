import { ButtonPresenter } from "./ButtonPresenter";
import { ButtonProps } from "./type";

export const ButtonContainer = (props: ButtonProps) => {
  return <ButtonPresenter {...props} />;
};
