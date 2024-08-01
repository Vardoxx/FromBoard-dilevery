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
    setOpen(!open);
  };
  return (
    <div className={s.active_container}>
      <Active
        label="Калькулятор"
        onClick={targetCalculatorHanndleClick}
        color={mainColors.purple}
        borderBottom={"2px dashed #8b5cf6"}
      />
      <Active onClick={showModal} label="O нас" />
      <MyModal open={open} onClose={() => setOpen(false)} width={1200}>
        <AboutUs />
      </MyModal>
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
