import s from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  name?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined;
  onChange?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined;
  maxLength?: number;
  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onBlur,
  onChange,
  value,
  name,
  maxLength,
  width,
  height,
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      style={{
        width: width ? width : "none",
        height: height ? height : "none",
      }}
      className={s.input}
      maxLength={maxLength}
      name={name}
      onBlur={onBlur}
    />
  );
};

export default Input;
