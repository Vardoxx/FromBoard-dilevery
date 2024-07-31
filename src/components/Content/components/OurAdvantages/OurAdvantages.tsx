import s from "./OurAdvantages.module.scss";
import Reseptions from "./components/Receptions/Reseptions";
import Title from "../../../../ui/Title/Title";

const OurAdvantages = () => {
  return (
    <section className={s.second_line}>
      <Title firstTitle="Наши преимущества" />
      <Reseptions />
    </section>
  );
};

export default OurAdvantages;
