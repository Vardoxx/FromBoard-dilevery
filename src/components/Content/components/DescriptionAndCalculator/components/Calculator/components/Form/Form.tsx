import { SubmitHandler } from "react-hook-form";
import { InputForm } from "../../../../../../../../context/formContext";
import { useFormContext } from "react-hook-form";
import s from "./Form.module.scss";
import Button from "../../../../../../../../ui/Button/Button";
import CustomInput from "../../../../../../../../modules/forms/CustomInput";

const Inputs = () => {
  const { formState, handleSubmit } = useFormContext<InputForm>();

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  const isDisable = !formState.isValid || !formState.isDirty;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={s.input_container}>
        <div className={s.top_input}>
          <CustomInput type="name" width="496px" />
        </div>

        <div className={s.middle_inputs}>
          <div>
            <CustomInput type="email" />
          </div>

          <div>
            <CustomInput type="tel" />
          </div>

          <div>
            <CustomInput type="area" />
          </div>

          <div>
            <CustomInput type="weight" />
          </div>

          <div>
            <CustomInput type="buyCountry" />
          </div>

          <div>
            <CustomInput type="buyCity" />
          </div>

          <div>
            <CustomInput type="diliveryRegion" />
          </div>

          <div>
            <CustomInput type="diliveryCity" />
          </div>
        </div>

        <Button
          disabled={isDisable}
          disableColor="gray"
          type="submit"
          width={"auto"}
          height={"auto"}
          label="Заказать расчёт"
        />
      </form>
    </div>
  );
};

export default Inputs;
