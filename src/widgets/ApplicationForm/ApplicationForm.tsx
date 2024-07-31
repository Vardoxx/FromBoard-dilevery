import { IoMdClose } from "react-icons/io";
import { SubmitHandler } from "react-hook-form";
import { mainColors } from "../../helpers/MainColors/MainColors";
import { useFormContext } from "react-hook-form";
import { InputForm } from "../../context/formContext";
import CustomInput from "../../modules/forms/CustomInput";
import Button from "../../ui/Button/Button";
import s from "./ApplicationForm.module.scss";

interface ApplicationFormProps {
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };
  const { formState, handleSubmit } = useFormContext<InputForm>();

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  const isDisable = !formState.isValid || !formState.isDirty;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{ backgroundColor: mainColors.white }}
          className={s.container}
        >
          <div className={s.closeIcon} onClick={handleCloseClick}>
            <IoMdClose />
          </div>

          <div className={s.middle_inputs}>
            <div>
              <CustomInput type="name" width="262px" />
            </div>
            <div>
              <CustomInput type="email" width="262px" />
            </div>
            <div>
              <CustomInput type="tel" width="262px" />
            </div>
            <div>
              <CustomInput type="productType" width="262px" />
            </div>
          </div>
          <div className={s.textarea_container}>
            <textarea id="" placeholder="Описание товара..."></textarea>
          </div>
          <Button
            disabled={isDisable}
            width={"auto"}
            height={"auto"}
            label="Оставить Заявку"
          />
        </div>
      </form>
    </>
  );
};

export default ApplicationForm;
