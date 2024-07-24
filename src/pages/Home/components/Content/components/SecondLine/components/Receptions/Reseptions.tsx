import taskIMG from "./img/tasksIMG.png";
import boxIMG from "./img/boxIMG.png";
import carIMG from "./img/carIMG.png";
import medalIMG from "./img//medalIMG.png";
import pcIMG from "./img/pcIMG.png";
import cartIMG from "./img/cartIMG.png";
import s from "./Reseptions.module.scss";

const Reseptions = () => {
  return (
    <div className={s.icons_container}>
      <div>
        <img src={taskIMG} alt="taskIMG" />
        <div>
          <span>Растоможка груза </span>Мы берём на себя все формальности и
          бумажную волокиту, связанную c растаможкой груза
        </div>
      </div>

      <div>
        <img src={boxIMG} alt="boxIMG" />
        <div>
          <span>Надёжная упаковка </span>Bce товары упаковываются нашими
          специалистами c особым вниманием к деталям, гарантируя, что они дойдут
          в безопасности и в отличном состоянии
        </div>
      </div>

      <div>
        <img src={carIMG} alt="carIMG" />
        <div>
          <span>Быстро и выгодно </span>Мы предлагаем быструю и выгодную
          доставку, чтобы вы могли насладиться покупками как можно скорее.
        </div>
      </div>

      <div>
        <img src={medalIMG} alt="medalIMG" />
        <div>
          <span>Удобный сервис </span>Стремимся сделать процесс доставки
          максимально удобным для вас, чтобы опыт остался приятным и беззаботным
        </div>
      </div>

      <div>
        <img src={pcIMG} alt="pcIMG" />
        <div>
          <span>Прозрачность работы </span>Мы предоставляем полный контроль над
          каждым этапом доставки, от момента заказа до момента прибытия заказа
        </div>
      </div>

      <div>
        <img src={cartIMG} alt="cartIMG" />
        <div>
          <span>Страхование груза </span>Наше страхование обеспечивает полную
          защиту и покрытие почти все неприятные и неожиданные ситуации
        </div>
      </div>
    </div>
  );
};

export default Reseptions;
