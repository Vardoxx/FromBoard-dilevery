import s from "./Button.module.scss";

interface BtnProps {
  width: string;
  height: string;
  label: string;
}

const Button: React.FC<BtnProps> = ({ height, width, label }) => {
  return (
    <a
      className={s.btn}
      style={{
        width: width,
        height: height,
      }}
      href="@"
    >
      {label}
    </a>
  );
};

export default Button;
