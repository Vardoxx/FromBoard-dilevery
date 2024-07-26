import s from "./Active.module.scss";

interface ActiveProps {
  href?: string;
  onClick?: () => void;
  label: string;
  color?: string;
  borderBottom?: string;
}

const Active: React.FC<ActiveProps> = ({
  href,
  onClick,
  label,
  color,
  borderBottom,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        borderBottom: borderBottom ? borderBottom : "none",
        color: color ? color : "none",
      }}
      className={s.active}
    >
      {label}
    </a>
  );
};

export default Active;
