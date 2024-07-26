import { mainColors } from "../../../../../../../../helpers/MainColors/MainColors";
import Active from "../../../../../../../../ui/Active/Active";
import s from "./Actives.module.scss";

const Actives = () => {
  return (
    <div className={s.actives_container}>
      <Active label="Калькулятор" href="@" color={mainColors.white} />
      <Active label="O нас" href="@" color={mainColors.white} />
      <Active label="Гарантии" href="@" color={mainColors.white} />
      <Active label="Отзывы" href="@" color={mainColors.white} />
    </div>
  );
};

export default Actives;
