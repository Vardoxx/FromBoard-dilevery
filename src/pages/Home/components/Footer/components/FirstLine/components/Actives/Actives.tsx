import { useContext, useState } from "react";
import { TargetContext } from "../../../../../../../../context/target";
import { mainColors } from "../../../../../../../../helpers/MainColors/MainColors";
import Active from "../../../../../../../../ui/Active/Active";
import s from "./Actives.module.scss";
import AboutUs from "../../../../../../../../widgets/AboutUs/AboutUs";

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
    <div className={s.actives_container}>
      <Active
        label="Калькулятор"
        onClick={targetCalculatorHanndleClick}
        color={mainColors.white}
      />
      <Active
        onClick={activeHanndleClick}
        label="O нас"
        color={mainColors.white}
      />
      {onClose && <AboutUs onClose={activeHanndleClick} />}
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
