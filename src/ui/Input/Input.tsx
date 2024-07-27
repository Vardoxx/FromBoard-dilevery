import s from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, width, height }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: width ? width : "none",
        height: height ? height : "none",
      }}
      className={s.input}
    />
  );
};

export default Input;
