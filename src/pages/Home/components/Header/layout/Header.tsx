import FirstLine from "../components/FirstLine/layout/FirstLine";
import SecondLine from "../components/SecondLine/layout/SecondLine";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <FirstLine />
      <SecondLine />
    </div>
  );
};

export default Header;
