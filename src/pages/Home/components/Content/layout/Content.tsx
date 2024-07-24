import FirstLine from "../components/FirstLine/layout/FirstLine";
import SecondLine from "../components/SecondLine/layout/SecondLine";
import ThirdLine from "../components/ThirdLine/layout/ThirdLine";
import FourLine from "../components/FourLine/layout/FourLine";
import s from "./Content.module.scss";

const Content = () => {
  return (
    <div className={s.content}>
      <FirstLine />
      <SecondLine />
      <ThirdLine />
      <FourLine />
    </div>
  );
};

export default Content;
