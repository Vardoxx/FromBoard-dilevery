import { ChangeEvent, useState } from "react";
import numberChecker from "../../modules/inputCheckers/numberChecker";
import textChecker from "../../modules/inputCheckers/textChecker";
import s from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  typeChecker: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  maxLength,
  width,
  height,
  typeChecker,
  onChange,
  ...props
}) => {
  const [err, setErr] = useState(false);
  const [block, setBlock] = useState(false);

  const inputChecker = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeChecker === "txt") {
      textChecker(e, placeholder, setErr, setBlock);
    }
    if (typeChecker === "number") {
      numberChecker(e, placeholder, setErr, setBlock);
    }
  };

  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      style={{
        width: width ? width : "none",
        height: height ? height : "none",
      }}
      onChange={onChange}
      className={`${s.input} ${err ? s.inputErr : ""}`}
      maxLength={maxLength}
      disabled={block}
    />
  );
};

export default Input;
