import s from "./Title.module.scss";

const Title = () => {
  return (
    <div>
      <div className={s.calculator_txt}>
        <span>Калькулятор доставки</span> Посчитайте, сколько будет стоить
        перевозка покупки из зарубежа
      </div>
    </div>
  );
};

export default Title;
