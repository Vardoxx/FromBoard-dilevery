import DescriptionIMG from "../../img/descriptionIMG.png";
import s from "./Description.module.scss";
import Title from "../../../../../../ui/Title/Title";

const Description = () => {
  return (
    <div className={s.description_container}>
      <Title
        firstTitle="Без проблемная доставка купленных вещей из США, Европы и Азии в Россию"
        secondTitle="Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис
      позволяет вам легко и удобно заказывать товары co всего мира и получать их
      в России"
        flexDirection="column"
      />
      <img src={DescriptionIMG} alt="DescriptionIMG" />
    </div>
  );
};

export default Description;
