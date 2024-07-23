import s from "./FirstLine.module.scss";
import logo from "./ui/logo.png";

const FirstLine = () => {
  return (
    <div className={s.line}>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
        <div>FromBoard Delivery</div>
      </div>
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
    </div>
  );
};

export default FirstLine;
