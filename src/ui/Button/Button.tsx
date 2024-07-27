import s from "./Button.module.scss";

interface BtnProps {
  width: string;
  height: string;
  label: string;
  onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({ height, width, label, onClick }) => {
  return (
    <a
      className={s.btn}
      style={{
        width: width,
        height: height,
      }}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Button;
