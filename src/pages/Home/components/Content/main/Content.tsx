import FirstLine from "../components/FirstLine/FirstLine";
import SecondLine from "../components/SecondLine/SecondLine";
import s from "./Content.module.scss";

const Content = () => {
  return (
    <div className={s.content}>
      <FirstLine />
      <SecondLine />
    </div>
  );
};

export default Content;
