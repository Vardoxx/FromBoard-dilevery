import FirstLine from "../FirstLine/FirstLine";
import SecondLine from "../SecondLine/SecondLine";
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
