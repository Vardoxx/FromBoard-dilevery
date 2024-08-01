import { useState } from "react";
import { useTargetContext } from "../../../../../../context/targetContext";
import { mainColors } from "../../../../../../helpers/MainColors/MainColors";
import Active from "../../../../../../ui/Active/Active";

import s from "./Actives.module.scss";

const Actives = () => {
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
