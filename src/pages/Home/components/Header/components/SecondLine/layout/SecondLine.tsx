import Button from "../../../../../../../ui/Button/Button";
import Actives from "../components/Actives/Actives";
import s from "./SecondLine.module.scss";

const SecondLine = () => {
  return (
    <div className={s.line}>
      <Actives />
      <div>
        <Button
          width={{ width: "196px" }}
          height={{ height: "44px" }}
          label="Оставить Заявку"
        />
      </div>
    </div>
  );
};

export default SecondLine;
