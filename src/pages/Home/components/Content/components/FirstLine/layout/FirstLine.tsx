import s from "./FirstLine.module.scss";
import Calculator from "../components/Calculator/layout/Calculator";
import Description from "../components/Description/layout/Description";

const FirstLine = () => {
  return (
    <section className={s.first_line}>
      <Description />
      <Calculator />
    </section>
  );
};

export default FirstLine;
