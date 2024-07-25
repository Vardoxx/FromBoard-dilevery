import FirstLine from "../components/FirstLine/layout/FirstLine";
import SecondLine from "../components/SecondLine/layout/SecondLine";
import ThirdLine from "../components/ThirdLine/layout/ThirdLine";
import FourLine from "../components/FourLine/layout/FourLine";
import FiveLine from "../components/FiveLine/layout/FiveLine";
import s from "./Content.module.scss";

const Content = () => {
  return (
    <section className={s.content}>
      <FirstLine />
      <SecondLine />
      <ThirdLine />
      <FourLine />
      <FiveLine />
    </section>
  );
};

export default Content;
