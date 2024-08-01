import { FormContext } from "../../../../../../context/formContext";

import Title from "../../../../../../ui/Title/Title";
import s from "./Calculator.module.scss";
import Inputs from "./components/Form/Form";

const Calculator = () => {
  return (
    <div className={s.calculator_container}>
      <Title
        firstTitle="Калькулятор доставки"
        secondTitle="Посчитайте, сколько будет стоить
        перевозка покупки из зарубежа"
        flexDirection="column"
        textAlign="center"
      />
      <FormContext>
        <Inputs />
      </FormContext>
    </div>
  );
};

export default Calculator;
