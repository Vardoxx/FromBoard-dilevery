import s from "./FirstLine.module.scss";
import Calculator from "./components/Calculator/Calculator";
import Description from "./components/Description/Description";

const FirstLine = () => {
  return (
    <div className={s.first_line}>
      <Description />
      <Calculator />
    </div>
  );
};

export default FirstLine;
