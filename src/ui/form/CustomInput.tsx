import { useFormContext } from "react-hook-form";
import { InputForm } from "../../context/formContext";

const emailRegex = {
  value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
  message: "Email некорректен",
};
const telRegex = {
  value: /^(7|[8])[\d]*(\.[\d]*)?[\d]*$/,
  message: "Телефон некорректен",
};
const stringRegex = {
  value: /^[а-яА-Я-ёЁ a-zA-Z ]+$/,
  message: "Только текстовое значение",
};
const numberRegex = {
  value: /^[0-9]*(\.[0-9]*)?[0-9]*$/,
  message: "Только числовое значение",
};
const required: string = "Поле обязательно";

type InputType =
  | "message"
  | "name"
  | "email"
  | "tel"
  | "area"
  | "weight"
  | "buyCountry"
  | "buyCity"
  | "diliveryRegion"
  | "diliveryCity"
  | "productType"
  | "questionType";

interface InputProps {
  type: InputType;
  regexValue?: string;
  placeholder?: string;
  width?: string;
}

const CustomInput: React.FC<InputProps> = ({ type, width, placeholder }) => {
  const { formState, register } = useFormContext<InputForm>();
  const error = formState.errors[type as keyof InputForm]?.message;

  let regexValue = /^/;
  let regexMessage = "";
  let lengthValueError = "";
  let maxLengthValue = 0;

  switch (type) {
    case "name":
      placeholder = "Имя";
      maxLengthValue = 15;
      lengthValueError = `Не больше ${maxLengthValue} символов`;
      regexValue = stringRegex.value;
      regexMessage = stringRegex.message;
      break;
    case "email":
      placeholder = "Почта";
      maxLengthValue = 100;
      lengthValueError = `Не больше ${maxLengthValue} символов`;
      regexValue = emailRegex.value;
      regexMessage = emailRegex.message;
      break;
    case "tel":
      placeholder = "Номер, 8987654321 ";
      maxLengthValue = 11;
      lengthValueError = `Не больше ${maxLengthValue} символов`;
      regexValue = telRegex.value;
      regexMessage = telRegex.message;

      break;
    case "area":
      placeholder = "Общая площадь, м²";
      maxLengthValue = 2;
      lengthValueError = `До 100м²`;
      regexValue = numberRegex.value;
      regexMessage = numberRegex.message;
      break;
    case "weight":
      placeholder = "Общий вес, кг";
      maxLengthValue = 4;
      lengthValueError = `До 10 000кг`;
      regexValue = numberRegex.value;
      regexMessage = numberRegex.message;
      break;
    case "buyCountry":
      placeholder = "Страна покупки";
      maxLengthValue = 100;
      lengthValueError = `Не больше ${maxLengthValue} символов`;
      regexValue = stringRegex.value;
      regexMessage = stringRegex.message;
      break;
    case "buyCity":
      placeholder = "Город покупки";
      maxLengthValue = 100;
      lengthValueError = `Не больше ${maxLengthValue} символов`;
      regexValue = stringRegex.value;
      regexMessage = stringRegex.message;
      break;
    case "diliveryRegion":
      placeholder = "Регион доставки";
      maxLengthValue = 100;
      lengthValueError = `Не больше ${maxLengthValue} символов`;
      regexValue = stringRegex.value;
      regexMessage = stringRegex.message;
      break;
    case "diliveryCity":
      placeholder = "Город доставки";
      maxLengthValue = 100;
      lengthValueError = `Не больше ${maxLengthValue} символов`;
      regexValue = stringRegex.value;
      regexMessage = stringRegex.message;
      break;
    case "productType":
      placeholder = "Тип товара";
      maxLengthValue = 30;
      lengthValueError = `Не больше ${maxLengthValue} символов`;
      regexValue = stringRegex.value;
      regexMessage = stringRegex.message;
      break;
    case "questionType":
      placeholder = "Тема вопроса";
      maxLengthValue = 30;
      lengthValueError = `Не больше ${maxLengthValue} символов`;
      regexValue = stringRegex.value;
      regexMessage = stringRegex.message;
      break;
  }

  return (
    <>
      <div style={{ height: "21px" }}>
        {error && <p style={{ color: "red", margin: "0" }}>{error}</p>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        style={{ width: width }}
        {...register(type, {
          maxLength: {
            value: maxLengthValue,
            message: lengthValueError,
          },
          required: required,
          pattern: {
            value: regexValue,
            message: regexMessage,
          },
        })}
      />
    </>
  );
};

export default CustomInput;
