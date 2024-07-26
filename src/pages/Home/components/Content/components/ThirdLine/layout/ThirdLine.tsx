import Sertificates from "../components/Sertificates/Sertificates";
import Title from "../components/Title/Title";
import s from "./ThirdLine.module.scss";

const ThirdLine = () => {
  return (
    <section className={s.third_line}>
      <Title />
      <Sertificates />
    </section>
  );
};

export default ThirdLine;
