import { InputType } from "../../types";

const Input = ({
  className,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  id,
  style,
}: InputType) => {
  return (
    <input
      className={className}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      style={style}
    />
  );
};

export default Input;
