import s from "./DescriptionAndCalculator.module.scss";
import Calculator from "./components/Calculator/Calculator";
import Description from "./components/Description/Description";
import { useTargetContext } from "../../../../context/targetContext";

const DescriptionAndCalculator = () => {
  const { targetCalculator } = useTargetContext();

  return (
    <section ref={targetCalculator} className={s.first_line}>
      <Description />
      <Calculator />
    </section>
  );
};

export default DescriptionAndCalculator;
