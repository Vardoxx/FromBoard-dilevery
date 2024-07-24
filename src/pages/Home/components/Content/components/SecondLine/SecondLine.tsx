import s from "./SecondLine.module.scss";
import Reseptions from "./components/Receptions/Reseptions";

const SecondLine = () => {
  return (
    <div className={s.second_line}>
      <Reseptions />
    </div>
  );
};

export default SecondLine;
