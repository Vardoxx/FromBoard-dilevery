import s from "./Actives.module.scss";

const Actives = () => {
  return (
    <div className={s.active_container}>
      <a href="@">Кальякулятор</a>
      <a href="@">О нас</a>
      <a href="@">Гарантии</a>
      <a href="@">Отзывы</a>
    </div>
  );
};

export default Actives;
