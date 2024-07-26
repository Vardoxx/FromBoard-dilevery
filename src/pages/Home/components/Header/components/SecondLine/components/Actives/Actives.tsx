import { useContext } from "react";
import { TargetContext } from "../../../../../../../../context/target";
import Active from "../../../../../../../../ui/Active/Active";
import { mainColors } from "../../../../../../../../helpers/MainColors/MainColors";
import s from "./Actives.module.scss";

const Actives = () => {
  const contextValue = useContext(TargetContext);

  if (
    !contextValue ||
    !contextValue.targetCalculatorHanndleClick ||
    !contextValue.targetGarantHanndleClick ||
    !contextValue.targetFeedbackHanndleClick
  ) {
    throw new Error(
      "TargetContext is not available or targetCalculatorHanndleClick is missing"
    );
  }

  const { targetCalculatorHanndleClick } = contextValue;
  const { targetGarantHanndleClick } = contextValue;
  const { targetFeedbackHanndleClick } = contextValue;

  return (
    <div className={s.active_container}>
      <Active
        label="Калькулятор"
        onClick={targetCalculatorHanndleClick}
        color={mainColors.purple}
        borderBottom={"2px dashed #8b5cf6"}
      />
      <Active label="O нас" />
      <Active
        label="Гарантии"
        onClick={targetGarantHanndleClick}
        color={mainColors.purple}
      />
      <Active label="Отзывы" onClick={targetFeedbackHanndleClick} />
    </div>
  );
};

export default Actives;
