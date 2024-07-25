import s from "./Logo.module.scss";
import logo from "./img/logo.png";

interface LogoProps {
  color: Record<string, string>;
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
      <div style={{ color: color["color"] }}>FromBoard Delivery</div>
    </div>
  );
};

export default Logo;
