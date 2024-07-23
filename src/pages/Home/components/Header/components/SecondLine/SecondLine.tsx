import s from "./SecondLine.module.scss";

const SecondLine = () => {
  return (
    <div className={s.line}>
      <div className={s.active_container}>
        <a href="@">Кальякулятор</a>
        <a href="@">О нас</a>
        <a href="@">Гарантии</a>
        <a href="@">Отзывы</a>
      </div>
      <div>
        <a className={s.btn} href="@">
          Оставить Заявку
        </a>
      </div>
    </div>
  );
};

export default SecondLine;
