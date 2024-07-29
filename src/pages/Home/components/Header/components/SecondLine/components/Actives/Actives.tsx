import { useContext, useState } from "react";
import { TargetContext } from "../../../../../../../../context/target";
import { mainColors } from "../../../../../../../../helpers/MainColors/MainColors";
import Active from "../../../../../../../../ui/Active/Active";
import AboutUs from "../../../../../../../../widgets/AboutUs/AboutUs";
import s from "./Actives.module.scss";

const Actives = () => {
  const contextValue = useContext(TargetContext);
  const [onClose, setOnClose] = useState(false);

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

  const activeHanndleClick = () => {
    setOnClose(!onClose);
  };
  return (
    <div className={s.active_container}>
      <Active
        label="Калькулятор"
        onClick={targetCalculatorHanndleClick}
        color={mainColors.purple}
        borderBottom={"2px dashed #8b5cf6"}
      />
      <Active onClick={activeHanndleClick} label="O нас" />
      {onClose && <AboutUs onClose={activeHanndleClick} />}
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
