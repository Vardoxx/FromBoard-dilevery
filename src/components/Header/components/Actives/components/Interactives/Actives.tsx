import { useState } from "react";
import { useTargetContext } from "../../../../../../context/targetContext";
import { mainColors } from "../../../../../../helpers/MainColors/MainColors";
import Active from "../../../../../../ui/Active/Active";
import AboutUs from "../../../../../../widgets/AboutUs/AboutUs";
import s from "./Actives.module.scss";

const Interactives = () => {
  const {
    targetCalculatorHanndleClick,
    targetGarantHanndleClick,
    targetFeedbackHanndleClick,
  } = useTargetContext();

  const [onClose, setOnClose] = useState(false);

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

export default Interactives;
