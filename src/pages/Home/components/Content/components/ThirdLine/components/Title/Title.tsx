import s from "./Title.module.scss";

const Title = () => {
  return (
    <div className={s.title_container}>
      <span>Гарантии качества </span>
      <div>
        Наши гарантии качества включают в себя полный спектр документов,
        необходимых для ввоза и вывоза товаров, a также для успешного бизнеса на
        мировом рынке. Мы предоставляем вам надёжность и уверенность
      </div>
    </div>
  );
};

export default Title;
