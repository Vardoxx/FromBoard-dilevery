import s from "./Logo.module.scss";
import logo from "./img/logo.png";

interface LogoProps {
  color: string;
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
      <div style={{ color: color }}>FromBoard Delivery</div>
    </div>
  );
};

export default Logo;
