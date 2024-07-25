import Inputs from "../components/Inputs/Inputs";
import Title from "../components/Title/Title";
import s from "./FiveLine.module.scss";

const FiveLine = () => {
  return (
    <section className={s.container}>
      <Title />
      <Inputs />
    </section>
  );
};

export default FiveLine;
