import { mainColors } from "../../../../helpers/MainColors/MainColors";
import Description from "./components/Description/Description";
import Logo from "../../../../ui/Logo/Logo";
import s from "./Info.module.scss";

const Info = () => {
  return (
    <div className={s.container}>
      <Logo color={mainColors.black} />
      <Description />
    </div>
  );
};

export default Info;
