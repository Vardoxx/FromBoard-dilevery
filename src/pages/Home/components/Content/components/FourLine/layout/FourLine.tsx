import FeedBack from "../components/Feedback/FeedBack";
import Title from "../components/Title/Title";
import s from "./FourLine.module.scss";

const FourLine = () => {
  return (
    <section className={s.container}>
      <Title />
      <FeedBack />
    </section>
  );
};

export default FourLine;
