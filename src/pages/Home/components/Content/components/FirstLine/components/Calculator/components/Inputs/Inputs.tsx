import Button from "../../../../../../../../../../ui/Button/Button";
import Input from "../../../../../../../../../../ui/Input/Input";
import s from "./Inputs.module.scss";

const Inputs = () => {
  return (
    <div className={s.input_container}>
      <div className={s.top_input}>
        <Input type="name" placeholder="Имя" width={"496px"} />
      </div>
      <div className={s.middle_inputs}>
        <Input type="email" placeholder="Почта" />
        <Input type="tel" placeholder="Телефон" />
        <Input type="number" placeholder="Общая площадь, м²" />
        <Input type="number" placeholder="Bec, кг" />
        <Input type="text" placeholder="Страна покупки" />
        <Input type="text" placeholder="Город покупки" />
        <Input type="text" placeholder="Область доставки" />
        <Input type="text" placeholder="Город доставки" />
      </div>
      <Button width={"auto"} height={"auto"} label="Заказать расчёт" />
    </div>
  );
};

export default Inputs;
