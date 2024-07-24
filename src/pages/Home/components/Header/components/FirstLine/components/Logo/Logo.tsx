import s from "./Logo.module.scss";
import logo from "./img/logo.png";

const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
      <div>FromBoard Delivery</div>
    </div>
  );
};

export default Logo;
