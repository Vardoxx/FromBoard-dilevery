import Info from "./components/Info/Info";
import Interactives from "./components/Actives/Interactives";
import s from "./Header.module.scss";
import { FormContext } from "../../context/formContext";

const Header = () => {
  return (
    <header className={s.container}>
      <Info />
      <FormContext>
        <Interactives />
      </FormContext>
    </header>
  );
};

export default Header;
