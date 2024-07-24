import s from "./Inputs.module.scss";

const Inputs = () => {
  return (
    <div className={s.input_container}>
      <div className={s.top_input}>
        <input type="name" placeholder="Имя" />
      </div>
      <div className={s.middle_inputs}>
        <input type="email" placeholder="Почта" />
        <input type="tel" placeholder="Телефон" />
        <input type="number" placeholder="Общая площадь, м²" />
        <input type="number" placeholder="Bec, кг" />
        <input type="text" placeholder="Страна покупки" />
        <input type="text" placeholder="Город покупки" />
        <input type="text" placeholder="Область доставки" />
        <input type="text" placeholder="Город доставки" />
      </div>
      <div className={s.bottom_btn}>
        <a className="content-first-line-input-container-btn" href="@">
          Оставить Заявку
        </a>
      </div>
    </div>
  );
};

export default Inputs;
