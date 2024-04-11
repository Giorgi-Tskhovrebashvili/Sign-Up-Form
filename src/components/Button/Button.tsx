import { ButtonType } from "../../types";

const Button = ({ children, className, type }: ButtonType) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
