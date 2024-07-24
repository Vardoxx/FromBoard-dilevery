import s from "./Calculator.module.scss";
import Inputs from "../components/Inputs/Inputs";
import Title from "../components/Title/Title";

const Calculator = () => {
  return (
    <div className={s.calculator_container}>
      <Title />
      <Inputs />
    </div>
  );
};

export default Calculator;
