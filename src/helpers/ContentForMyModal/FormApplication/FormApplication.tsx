import { useFormContext, SubmitHandler } from "react-hook-form";
import { InputForm } from "../../../context/formContext";
import CustomInput from "../../../ui/form/CustomInput";
import CustomTextArea from "../../../ui/form/CustomTextArea";
import Button from "../../../ui/Button/Button";
import s from "./FormApplication.module.scss";

const FormApplication = () => {
  const { formState, handleSubmit } = useFormContext<InputForm>();
  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  const isDisable = !formState.isValid || !formState.isDirty;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputs_container}>
        <div>
          <CustomInput type="name" />
        </div>
        <div>
          <CustomInput type="email" />
        </div>
        <div>
          <CustomInput type="tel" />
        </div>
        <div>
          <CustomInput type="productType" />
        </div>
        <div></div>
      </div>
      <CustomTextArea type="moreInfo" width="496px" height="150px" />
      <Button
        disabled={isDisable}
        width={"502px"}
        height={"44px"}
        label="Оставить Заявку"
      />
    </form>
  );
};

export default FormApplication;
