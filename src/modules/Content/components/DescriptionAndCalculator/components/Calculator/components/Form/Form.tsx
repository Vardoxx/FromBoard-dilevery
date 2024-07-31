import { SubmitHandler, useForm } from "react-hook-form";
import s from "./Form.module.scss";
import Button from "../../../../../../../../ui/Button/Button";

interface InputForm {
  name: string;
  email: string;
  tel: string;
  area: string;
  weight: string;
  buyCountry: string;
  buyCity: string;
  diliveryRegion: string;
  diliveryCity: string;
  message: string;
}

const Inputs = () => {
  const { register, handleSubmit, formState } = useForm<InputForm>({
    mode: "onChange",
  });

  const required: string = "Поле обязательно";
  const emailRegex = {
    value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
    message: "Email некорректен",
  };
  const stringRegex = {
    value: /^[а-яА-Я-ёЁ a-zA-Z ]+$/,
    message: "Только текстовое значение",
  };
  const numberRegex = {
    value: /^[0-9]*(\.[0-9]*)?[0-9]*$/,
    message: "Только числовое значение",
  };

  const nameError = formState.errors["name"]?.message;
  const emailError = formState.errors["email"]?.message;
  const telError = formState.errors["tel"]?.message;
  const areaError = formState.errors["area"]?.message;
  const weightError = formState.errors["weight"]?.message;
  const buyCountryError = formState.errors["buyCountry"]?.message;
  const buyCityError = formState.errors["buyCity"]?.message;
  const diliveryRegionError = formState.errors["diliveryRegion"]?.message;
  const diliveryCityError = formState.errors["diliveryCity"]?.message;

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  const isDisable = !formState.isValid || !formState.isDirty;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={s.input_container}>
        <div className={s.top_input}>
          <div style={{ height: "21px" }}>
            {nameError && (
              <p style={{ color: "red", margin: "0" }}>{nameError}</p>
            )}
          </div>
          <input
            type="name"
            placeholder="Имя"
            style={{ width: "496px" }}
            {...register("name", {
              maxLength: { value: 15, message: "Не больше 15 символов" },
              required: required,
              pattern: {
                value: stringRegex.value,
                message: stringRegex.message,
              },
            })}
          />
        </div>

        <div className={s.middle_inputs}>
          <div>
            <div style={{ height: "21px" }}>
              {emailError && (
                <p style={{ color: "red", margin: "0" }}>{emailError}</p>
              )}
            </div>
            <input
              {...register("email", {
                required: required,
                pattern: {
                  value: emailRegex.value,
                  message: emailRegex.message,
                },
                maxLength: { value: 100, message: emailRegex.message },
              })}
              name="email"
              type="email"
              placeholder="Почта"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {telError && (
                <p style={{ color: "red", margin: "0" }}>{telError}</p>
              )}
            </div>
            <input
              {...register("tel", {
                required: required,
                pattern: {
                  value: numberRegex.value,
                  message: numberRegex.message,
                },
                maxLength: { value: 11, message: "Телефон некорректен" },
              })}
              name="tel"
              type="tel"
              placeholder="78001234567, Номер"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {areaError && (
                <p style={{ color: "red", margin: "0" }}>{areaError}</p>
              )}
            </div>
            <input
              {...register("area", {
                required: required,
                pattern: {
                  value: numberRegex.value,
                  message: numberRegex.message,
                },
                maxLength: { value: 3, message: "До 100м²" },
              })}
              name="area"
              type="text"
              placeholder="Общая площадь, м²"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {weightError && (
                <p style={{ color: "red", margin: "0" }}>{weightError}</p>
              )}
            </div>
            <input
              {...register("weight", {
                required: required,
                pattern: {
                  value: numberRegex.value,
                  message: numberRegex.message,
                },
                maxLength: { value: 3, message: "До 1000кг" },
              })}
              name="weight"
              type="text"
              placeholder="Общий вес, кг"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {buyCountryError && (
                <p style={{ color: "red", margin: "0" }}>{buyCountryError}</p>
              )}
            </div>
            <input
              {...register("buyCountry", {
                required: required,
                pattern: {
                  value: stringRegex.value,
                  message: stringRegex.message,
                },
                maxLength: { value: 100, message: "До 100 символов" },
              })}
              name="buyCountry"
              type="text"
              placeholder="Страна покупки"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {buyCityError && (
                <p style={{ color: "red", margin: "0" }}>{buyCityError}</p>
              )}
            </div>
            <input
              {...register("buyCity", {
                required: required,
                pattern: {
                  value: stringRegex.value,
                  message: stringRegex.message,
                },
                maxLength: { value: 100, message: "До 100 символов" },
              })}
              name="buyCity"
              type="text"
              placeholder="Город покупки"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {diliveryRegionError && (
                <p style={{ color: "red", margin: "0" }}>
                  {diliveryRegionError}
                </p>
              )}
            </div>
            <input
              {...register("diliveryRegion", {
                required: required,
                pattern: {
                  value: stringRegex.value,
                  message: stringRegex.message,
                },
                maxLength: { value: 100, message: "До 100 символов" },
              })}
              name="diliveryRegion"
              type="text"
              placeholder="Область доставки"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {diliveryCityError && (
                <p style={{ color: "red", margin: "0" }}>{diliveryCityError}</p>
              )}
            </div>
            <input
              {...register("diliveryCity", {
                required: required,
                pattern: {
                  value: stringRegex.value,
                  message: stringRegex.message,
                },
                maxLength: { value: 100, message: "До 100 символов" },
              })}
              name="diliveryCity"
              type="text"
              placeholder="Город доставки"
            />
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
