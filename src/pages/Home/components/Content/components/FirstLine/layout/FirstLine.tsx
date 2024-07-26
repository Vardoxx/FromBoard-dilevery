import s from "./FirstLine.module.scss";
import Calculator from "../components/Calculator/layout/Calculator";
import Description from "../components/Description/layout/Description";
import { useContext } from "react";
import { TargetContext } from "../../../../../../../context/target";

const FirstLine = () => {
  const contextValue = useContext(TargetContext);

  if (!contextValue) {
    throw new Error("TargetContext is not available");
  }

  const { targetCalculator } = contextValue;

  return (
    <section ref={targetCalculator} className={s.first_line}>
      <Description />
      <Calculator />
    </section>
  );
};

export default FirstLine;
