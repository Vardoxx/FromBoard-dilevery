import Button from "../../../../../../../../ui/Button/Button";
import Input from "../../../../../../../../ui/Input/Input";
import s from "./Inputs.module.scss";

const Inputs = () => {
  return (
    <div className={s.input_container}>
      <div className={s.middle_inputs}>
        <Input typeChecker="txt" type="name" placeholder="Имя" />
        <Input typeChecker="txt" type="email" placeholder="Почта" />
        <Input typeChecker="number" type="tel" placeholder="Телефон" />
        <Input typeChecker="txt" type="text" placeholder="Тема вопроса" />
      </div>
      <div className={s.textarea_container}>
        <textarea id="" placeholder="Сообщение..."></textarea>
      </div>
      <Button width={"auto"} height={"auto"} label="Оставить Заявку" />
    </div>
  );
};

export default Inputs;
