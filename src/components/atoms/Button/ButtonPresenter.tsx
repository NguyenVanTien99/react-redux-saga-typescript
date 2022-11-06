import { ButtonProps } from "./type";
import classnames from "classnames";
import styles from "./Button.module.scss";

export const ButtonPresenter = ({
  color = "#555555",
  content,
  ...props
}: ButtonProps) => {
  return (
    <div>
      <button
        className={classnames(styles.default)}
        style={{ background: color }}
        {...props}
      >
        {content}
      </button>
    </div>
  );
};
