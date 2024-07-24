import DescriptionIMG from "../img/descriptionIMG.png";
import s from "./Description.module.scss";
import Text from "../components/Text";

const Description = () => {
  return (
    <div className={s.description_container}>
      <Text />
      <img src={DescriptionIMG} alt="DescriptionIMG" />
    </div>
  );
};

export default Description;
