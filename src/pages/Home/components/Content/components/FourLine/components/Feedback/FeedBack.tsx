import leftArrowIMG from "./img/leftArrowIMG.png";
import rightArrowIMG from "./img/rightArrowIMG.png";
import s from "./FeedBack.module.scss";

const FeedBack = () => {
  return (
    <div className={s.feedBacks_container}>
      <div className={s.arrow_container}>
        <img src={leftArrowIMG} alt="" />
      </div>
      <div className={s.cards_container}>
        <div className={s.feedBack_card}>
          <div>
            Я заказала последний iPhone из США через ваш сервис, и доставка
            прошла быстро и без каких‑либо проблем. Гарантии качества и надёжная
            упаковка сделали мой опыт покупки невероятно позитивным
          </div>
          <span>Анна</span>
        </div>
        <div className={s.feedBack_card}>
          <div>
            Я уже несколько лет заказываю дизайнерскую одежду из Франции через
            ваш сервис, и он никогда меня не подводил. Важно иметь надёжную
            компанию, которая позаботится o вашем заказе и предоставит все
            необходимые документы для ввоза в Россию
          </div>
          <span>Алексей</span>
        </div>
      </div>
      <div className={s.arrow_container}>
        <img src={rightArrowIMG} alt="" />
      </div>
    </div>
  );
};

export default FeedBack;
