import { useContext } from "react";
import FeedBack from "../components/Feedback/FeedBack";
import Title from "../components/Title/Title";
import s from "./FourLine.module.scss";
import { TargetContext } from "../../../../../../../context/target";

const FourLine = () => {
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

export default FourLine;
