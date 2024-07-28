import Button from "../../../../../../../../../../ui/Button/Button";
import Input from "../../../../../../../../../../ui/Input/Input";
import s from "./Inputs.module.scss";

const Inputs = () => {
  return (
    <div className={s.input_container}>
      <div className={s.top_input}>
        <Input
          typeChecker="txt"
          maxLength={20}
          type="name"
          placeholder="Имя"
          width={"496px"}
        />
      </div>
      <div className={s.middle_inputs}>
        <Input
          typeChecker="txt"
          maxLength={100}
          type="email"
          placeholder="Почта"
        />
        <Input
          typeChecker="number"
          maxLength={11}
          type="tel"
          placeholder="Телефон"
        />
        <Input
          typeChecker="number"
          maxLength={3}
          type="text"
          placeholder="Общая площадь, м²"
        />
        <Input
          typeChecker="number"
          maxLength={4}
          type="text"
          placeholder="Bec, кг"
        />
        <Input
          typeChecker="txt"
          maxLength={29}
          type="text"
          placeholder="Страна покупки"
        />
        <Input
          typeChecker="txt"
          maxLength={29}
          type="text"
          placeholder="Город покупки"
        />
        <Input
          typeChecker="txt"
          maxLength={29}
          type="text"
          placeholder="Область доставки"
        />
        <Input
          typeChecker="txt"
          maxLength={29}
          type="text"
          placeholder="Город доставки"
        />
      </div>
      <Button width={"auto"} height={"auto"} label="Заказать расчёт" />
    </div>
  );
};

export default Inputs;
