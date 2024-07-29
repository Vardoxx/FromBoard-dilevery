import Info from "./components/Info/Info";
import Actives from "./components/Actives/Interactives";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.container}>
      <Info />
      <Actives />
    </header>
  );
};

export default Header;
