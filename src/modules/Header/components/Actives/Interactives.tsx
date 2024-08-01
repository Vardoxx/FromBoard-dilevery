import MyModal from "../../../../widgets/MyModal";
import Button from "../../../../ui/Button/Button";
import Actives from "./components/Actives/Actives";
import { useState } from "react";
import s from "./Interactives.module.scss";
import FormApplication from "../../../../helpers/ContentForMyModal/FormApplication/FormApplication";

const Interactives = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  return (
    <div className={s.line}>
      <Actives />
      <div>
        <MyModal open={open} onClose={() => setOpen(false)} width={550}>
          <FormApplication />
        </MyModal>
        <Button
          onClick={showModal}
          width={"196px"}
          height={"44px"}
          label="Оставить Заявку"
        />
      </div>
    </div>
  );
};

export default Interactives;
