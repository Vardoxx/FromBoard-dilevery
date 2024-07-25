import Description from "../components/Description/Description";
import Logo from "../../../../../../../ui/Logo/Logo";
import s from "./FirstLine.module.scss";

const FirstLine = () => {
  return (
    <div className={s.container}>
      <Logo color={{ color: "black" }} />
      <Description />
    </div>
  );
};

export default FirstLine;
