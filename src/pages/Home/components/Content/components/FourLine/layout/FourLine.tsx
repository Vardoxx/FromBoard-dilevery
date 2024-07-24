import FeedBack from "../components/Feedback/FeedBack";
import Title from "../components/Title/Title";
import s from "./FourLine.module.scss";

const FourLine = () => {
  return (
    <div className={s.container}>
      <Title />
      <FeedBack />
    </div>
  );
};

export default FourLine;
