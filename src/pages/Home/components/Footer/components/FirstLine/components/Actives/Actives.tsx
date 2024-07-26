import { useContext } from "react";
import { TargetContext } from "../../../../../../../../context/target";
import { mainColors } from "../../../../../../../../helpers/MainColors/MainColors";
import Active from "../../../../../../../../ui/Active/Active";
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
    <div className={s.actives_container}>
      <Active
        label="Калькулятор"
        onClick={targetCalculatorHanndleClick}
        color={mainColors.white}
      />
      <Active label="O нас" href="@" color={mainColors.white} />
      <Active
        label="Гарантии"
        onClick={targetGarantHanndleClick}
        color={mainColors.white}
      />
      <Active
        label="Отзывы"
        onClick={targetFeedbackHanndleClick}
        color={mainColors.white}
      />
    </div>
  );
};

export default Actives;
