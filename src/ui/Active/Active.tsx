import s from "./Active.module.scss";

interface ActiveProps {
  href: string;
  label: string;
  color?: string;
  borderBottom?: string;
}

const Active: React.FC<ActiveProps> = ({
  href,
  label,
  color,
  borderBottom,
}) => {
  return (
    <a
      href={href}
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
