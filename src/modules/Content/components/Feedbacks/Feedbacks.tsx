import { useContext } from "react";
import { TargetContext } from "../../../../context/targetContext";
import FeedBack from "./components/Feedback/FeedBack";
import Title from "./components/Title/Title";
import s from "./Feedbacks.module.scss";

const Feedbacks = () => {
  const contextValue = useContext(TargetContext);

  if (!contextValue) {
    throw new Error("Snys");
  }

  const { targetFeedback } = contextValue;
  return (
    <section ref={targetFeedback} className={s.container}>
      <Title />
      <FeedBack />
    </section>
  );
};

export default Feedbacks;
