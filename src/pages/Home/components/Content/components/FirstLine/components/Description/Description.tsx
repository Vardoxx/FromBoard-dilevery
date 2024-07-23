import DescriptionIMG from "./ui/content-first-line-img.png";
import s from "./Description.module.scss";

const Description = () => {
  return (
    <div className={s.description_container}>
      <div className={s.description_txt}>
        <span>
          Без проблемная доставка купленных вещей из США, Европы и Азии в Россию
        </span>
        Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис
        позволяет вам легко и удобно заказывать товары co всего мира и получать
        их в России
      </div>
      <img src={DescriptionIMG} alt="DescriptionIMG" />
    </div>
  );
};

export default Description;
