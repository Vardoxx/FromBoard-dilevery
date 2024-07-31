import { mainColors } from "../../../../helpers/MainColors/MainColors";
import Logo from "../../../../ui/Logo/Logo";
import Actives from "./components/Actives/Actives";
import Number from "./components/Number/Number";
import s from "./Info.module.scss";

const FirstLine = () => {
  return (
    <div className={s.container}>
      <Logo color={mainColors.white} />
      <Actives />
      <Number />
    </div>
  );
};

export default FirstLine;
