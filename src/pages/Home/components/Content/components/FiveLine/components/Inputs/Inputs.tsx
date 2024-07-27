import Button from "../../../../../../../../ui/Button/Button";
import Input from "../../../../../../../../ui/Input/Input";
import s from "./Inputs.module.scss";

const Inputs = () => {
  return (
    <div className={s.input_container}>
      <div className={s.middle_inputs}>
        <Input type="name" placeholder="Имя" />
        <Input type="email" placeholder="Почта" />
        <Input type="tel" placeholder="Телефон" />
        <Input type="text" placeholder="Тема вопроса" />
      </div>
      <div className={s.textarea_container}>
        <textarea id="" placeholder="Сообщение..."></textarea>
      </div>
      <Button width={"auto"} height={"auto"} label="Оставить Заявку" />
    </div>
  );
};

export default Inputs;
