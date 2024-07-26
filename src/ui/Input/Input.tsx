import s from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  width?: Record<string, string>;
  height?: Record<string, string>;
}

const Input: React.FC<InputProps> = ({ type, placeholder, width, height }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: width ? width["width"] : "none",
        height: height ? height["height"] : "none",
      }}
      className={s.input}
    />
  );
};

export default Input;
