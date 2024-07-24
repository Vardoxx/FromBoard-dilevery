import Sertificates from "../components/Sertificates/Sertificates";
import Title from "../components/Title/Title";
import s from "./ThirdLine.module.scss";

const ThirdLine = () => {
  return (
    <div className={s.third_line}>
      <Title />
      <Sertificates />
      <div className={s.btn_container}>
        <a href="@">Показать больше документов</a>
      </div>
    </div>
  );
};

export default ThirdLine;
