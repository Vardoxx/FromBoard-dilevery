import s from "./Button.module.scss";

interface BtnProps {
  width: Record<string, string>;
  height: Record<string, string>;

  label: string;
}

const Button: React.FC<BtnProps> = ({ height, width, label }) => {
  return (
    <a
      className={s.btn}
      style={{
        width: width["width"],
        height: height["height"],
      }}
      href="@"
    >
      {label}
    </a>
  );
};

export default Button;
