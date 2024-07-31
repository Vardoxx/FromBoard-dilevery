import { useState } from "react";
import Button from "../../../../ui/Button/Button";
import ApplicationForm from "../../../../widgets/ApplicationForm/ApplicationForm";
import Actives from "./components/Interactives/Actives";
import s from "./Interactives.module.scss";

const Interactives = () => {
  const [open, setOpen] = useState(false);

  const buttonHanndleClick = () => {
    setOpen(!open);
  };

  const handleApplicationWidgetClose = () => {
    setOpen(false);
  };

  return (
    <div className={s.line}>
      {open && <ApplicationForm onClose={handleApplicationWidgetClose} />}
      <Actives />
      <div>
        <Button
          onClick={buttonHanndleClick}
          width={"196px"}
          height={"44px"}
          label="Оставить Заявку"
        />
      </div>
    </div>
  );
};

export default Interactives;
