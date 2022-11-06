import { ButtonContainer } from "./ButtonContainer";
import { ButtonProps } from "./type";

const Button = (props: ButtonProps): JSX.Element => (
  <ButtonContainer {...props} />
);

export default Button;
