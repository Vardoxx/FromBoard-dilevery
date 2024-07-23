import FirstLine from "../components/FirstLine/FirstLine";
import s from "./Content.module.scss";

const Content = () => {
  return (
    <div className={s.content}>
      <FirstLine />
    </div>
  );
};

export default Content;
