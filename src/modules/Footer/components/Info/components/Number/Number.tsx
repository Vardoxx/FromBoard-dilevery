import s from "./Number.module.scss";

const Number = () => {
  return (
    <div className={s.number_container}>
      <span>{"+7 (800) 123 45-67"}</span>
      <div>Звонки по России бесплатны</div>
    </div>
  );
};

export default Number;
