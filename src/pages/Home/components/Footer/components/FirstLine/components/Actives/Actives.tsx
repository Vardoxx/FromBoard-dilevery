import Active from "../../../../../../../../ui/Active/Active";
import s from "./Actives.module.scss";

const Actives = () => {
  return (
    <div className={s.actives_container}>
      <Active label="Калькулятор" href="@" color={"#F9FAFB"} />
      <Active label="O нас" href="@" color={"#F9FAFB"} />
      <Active label="Гарантии" href="@" color={"#F9FAFB"} />
      <Active label="Отзывы" href="@" color={"#F9FAFB"} />
    </div>
  );
};

export default Actives;
