import Logo from "../../../../../../../ui/Logo/Logo";
import Actives from "../components/Actives/Actives";
import Number from "../components/Number/Number";
import s from "./FirstLine.module.scss";

const FirstLine = () => {
  return (
    <div className={s.container}>
      <Logo color={"#F9FAFB"} />
      <Actives />
      <Number />
    </div>
  );
};

export default FirstLine;
