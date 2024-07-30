import s from "./Button.module.scss";

type type = "submit" | "button";

interface BtnProps {
  width: string;
  height: string;
  disabled?: boolean;
  type?: type;
  label: string;
  onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({
  height,
  disabled,
  width,
  label,
  type,
  onClick,
}) => {
  return (
    <button
      className={s.btn}
      style={{
        width: width,
        height: height,
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
