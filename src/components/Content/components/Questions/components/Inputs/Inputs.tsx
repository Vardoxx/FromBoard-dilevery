import { SubmitHandler } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { InputForm } from "../../../../../../context/formContext";
import CustomInput from "../../../../../../modules/forms/CustomInput";
import Button from "../../../../../../ui/Button/Button";

import s from "./Inputs.module.scss";
const Inputs = () => {
  const { formState, handleSubmit } = useFormContext<InputForm>();

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  const isDisable = !formState.isValid || !formState.isDirty;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.input_container}>
        <div className={s.middle_inputs}>
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
            <CustomInput type="questionType" />
          </div>
        </div>
        <div className={s.textarea_container}></div>
        <Button
          disabled={isDisable}
          width={"auto"}
          height={"auto"}
          label="Оставить Заявку"
        />
      </div>
    </form>
  );
};

export default Inputs;
