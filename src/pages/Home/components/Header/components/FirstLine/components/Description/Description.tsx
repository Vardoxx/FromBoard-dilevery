import s from "./Description.module.scss";

const Description = () => {
  return (
    <div className={s.description_container}>
      <div className={s.txt}>
        Доставляем товары из заграницы в Россию
        <br />
        Стоимость от 550 рублей за заказ
        <br />1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽
      </div>
      <div className={s.number}>
        <span>{"+7 (800) 123 45-67"}</span>
        <br />
        Звонки по России бесплатны
      </div>
    </div>
  );
};

export default Description;
