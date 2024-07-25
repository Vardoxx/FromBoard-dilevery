import FirstLine from "../components/FirstLine/layout/FirstLine";
import SecondLine from "../components/SecondLine/layout/SecondLine";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.container}>
      <FirstLine />
      <SecondLine />
    </header>
  );
};

export default Header;
