import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Input from "../../../../../../../../ui/Input/Input";
import s from "./Inputs.module.scss";
import SubmitBtn from "../../../../../../../../ui/SubmitBtn/SubmitBtn";
type FormInputs = {
  name: string;
  exampleRequired: string;
};

const Inputs = () => {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it\
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.input_container}>
        <div className={s.top_input}>
          <Controller
            rules={{
              required: "Поле обязательно",
              maxLength: { value: 20, message: "Максимум 20 символов" },
            }}
            render={({ field: { onChange } }) => {
              return (
                <Input
                  type=""
                  placeholder="Имя"
                  typeChecker=""
                  onChange={onChange}
                />
              );
            }}
            name="name"
            control={control}
            defaultValue=""
          />
          {/* <input
            // typeChecker="txt"
            maxLength={20}
            type="name"
            placeholder="Имя"
            width={"496px"}
            {...register("name", { required: true })}
          /> */}

          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </div>
        <div className={s.middle_inputs}>
          <Input
            typeChecker="txt"
            maxLength={100}
            type="email"
            placeholder="Почта"
          />
          <Input
            typeChecker="number"
            maxLength={11}
            type="tel"
            placeholder="Телефон"
          />
          <Input
            typeChecker="number"
            maxLength={3}
            type="text"
            placeholder="Общая площадь, м²"
          />
          <Input
            typeChecker="number"
            maxLength={4}
            type="text"
            placeholder="Bec, кг"
          />
          <Input
            typeChecker="txt"
            maxLength={29}
            type="text"
            placeholder="Страна покупки"
          />
          <Input
            typeChecker="txt"
            maxLength={29}
            type="text"
            placeholder="Город покупки"
          />
          <Input
            typeChecker="txt"
            maxLength={29}
            type="text"
            placeholder="Область доставки"
          />
          <Input
            typeChecker="txt"
            maxLength={29}
            type="text"
            placeholder="Город доставки"
          />
        </div>
        <SubmitBtn width={"auto"} height={"auto"} label="Заказать расчёт" />
      </div>
    </form>
  );
};

export default Inputs;
