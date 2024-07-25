import s from "./SecondLine.module.scss";
import Reseptions from "../components/Receptions/Reseptions";
import Title from "../components/Title/Title";

const SecondLine = () => {
  return (
    <section className={s.second_line}>
      <Title />
      <Reseptions />
    </section>
  );
};

export default SecondLine;
