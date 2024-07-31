import { IoMdClose } from "react-icons/io";
import { mainColors } from "../../helpers/MainColors/MainColors";
import Button from "../../ui/Button/Button";
import s from "./ApplicationForm.module.scss";

interface ApplicationFormProps {
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <>
      <div
        style={{ backgroundColor: mainColors.white }}
        className={s.container}
      >
        <div className={s.closeIcon} onClick={handleCloseClick}>
          <IoMdClose />
        </div>
        <div className={s.middle_inputs}>
          <input type="name" placeholder="Имя" />
          <input type="email" placeholder="Почта" />
          <input type="tel" placeholder="Телефон" />
          <input type="text" placeholder="Тип товара" />
        </div>
        <div className={s.textarea_container}>
          <textarea id="" placeholder="Описание товара..."></textarea>
        </div>
        <Button width={"auto"} height={"auto"} label="Оставить Заявку" />
      </div>
    </>
  );
};

export default ApplicationForm;
