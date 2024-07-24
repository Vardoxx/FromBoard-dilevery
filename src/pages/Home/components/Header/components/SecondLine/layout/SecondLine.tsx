import Actives from "../components/Actives/Actives";
import s from "./SecondLine.module.scss";

const SecondLine = () => {
  return (
    <div className={s.line}>
      <Actives />
      <div>
        <a className={s.btn} href="@">
          Оставить Заявку
        </a>
      </div>
    </div>
  );
};

export default SecondLine;
