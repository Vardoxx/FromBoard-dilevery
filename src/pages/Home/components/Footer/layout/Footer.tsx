import Author from "../components/Author/Author";
import FirstLine from "../components/FirstLine/layout/FirstLine";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <FirstLine />
      <Author />
    </footer>
  );
};

export default Footer;
