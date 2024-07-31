import s from "./Button.module.scss";

type type = "submit" | "button";

interface BtnProps {
  width: string;
  height: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  disableColor?: string;
  type?: type;
}

const Button: React.FC<BtnProps> = ({
  height,
  disabled,
  width,
  label,
  type,
  onClick,
}) => {
  const disableColor = disabled ? "gray" : "#8b5cf6";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={s.btn}
      style={{
        width: width,
        height: height,
        backgroundColor: disableColor,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
