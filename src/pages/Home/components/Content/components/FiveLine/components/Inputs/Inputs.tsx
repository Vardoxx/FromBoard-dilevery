import Button from "../../../../../../../../ui/Button/Button";
import s from "./Inputs.module.scss";

const Inputs = () => {
  return (
    <div className={s.input_container}>
      <div className={s.middle_inputs}>
        <input type="name" placeholder="Имя" />
        <input type="email" placeholder="Почта" />
        <input type="tel" placeholder="Телефон" />
        <input type="text" placeholder="Тема вопроса" />
      </div>
      <div className={s.textarea_container}>
        <textarea id="" placeholder="Сообщение..."></textarea>
      </div>
      <Button
        width={{ width: "auto" }}
        height={{ height: "auto" }}
        label="Оставить Заявку"
      />
    </div>
  );
};

export default Inputs;
