import Inputs from "../components/Inputs/Inputs";
import Title from "../components/Title/Title";
import s from "./FiveLine.module.scss";

const FiveLine = () => {
  return (
    <div className={s.container}>
      <Title />
      <Inputs />
    </div>
  );
};

export default FiveLine;
