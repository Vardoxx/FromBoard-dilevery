import Description from "../components/Description/Description";
import Logo from "../components/Logo/Logo";
import s from "./FirstLine.module.scss";

const FirstLine = () => {
  return (
    <div className={s.line}>
      <Logo />
      <Description />
    </div>
  );
};

export default FirstLine;
