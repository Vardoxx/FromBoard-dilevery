import { useState } from "react";
import { useTargetContext } from "../../../../../../context/targetContext";
import { mainColors } from "../../../../../../helpers/MainColors/MainColors";
import Active from "../../../../../../ui/Active/Active";

import s from "./Actives.module.scss";
import MyModal from "../../../../../../widgets/MyModal";
import AboutUs from "../../../../../../helpers/ContentForMyModal/AboutUs/AboutUs";

const Actives = () => {
  const {
    targetCalculatorHanndleClick,
    targetGarantHanndleClick,
    targetFeedbackHanndleClick,
  } = useTargetContext();

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  return (
    <div className={s.actives_container}>
      <Active
        label="Калькулятор"
        onClick={targetCalculatorHanndleClick}
        color={mainColors.white}
      />
      <MyModal open={open} onClose={() => setOpen(false)} width={1200}>
        <AboutUs />
      </MyModal>
      <Active onClick={showModal} label="O нас" color={mainColors.white} />
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
