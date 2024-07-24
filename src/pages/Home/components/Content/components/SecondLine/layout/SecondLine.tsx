import s from "./SecondLine.module.scss";
import Reseptions from "../components/Receptions/Reseptions";
import Title from "../components/Title/Title";

const SecondLine = () => {
  return (
    <div className={s.second_line}>
      <Title />
      <Reseptions />
    </div>
  );
};

export default SecondLine;
