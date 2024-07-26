import { mainColors } from "../../../../../../../../helpers/MainColors/MainColors";
import Active from "../../../../../../../../ui/Active/Active";
import s from "./Actives.module.scss";

const Actives = () => {
  return (
    <div className={s.active_container}>
      <Active
        label="Калькулятор"
        href="@"
        color={mainColors.purple}
        borderBottom={"2px dashed #8b5cf6"}
      />
      <Active label="O нас" href="@" />
      <Active label="Гарантии" href="@" color={mainColors.purple} />
      <Active label="Отзывы" href="@" />
    </div>
  );
};

export default Actives;
