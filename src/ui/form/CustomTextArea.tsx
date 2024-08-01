import { useFormContext } from "react-hook-form";
import { InputForm } from "../../context/formContext";

const stringRegex = {
  value: /^[а-яА-ЯёЁa-zA-Z0-9\s.,;:!?-]*$/,
  message: "Только текстовое значение",
};

type InputType = "moreInfo";

interface InputProps {
  type: InputType;
  regexValue?: string;
  placeholder?: string;
  height?: string;
  width?: string;
}

const CustomTextArea: React.FC<InputProps> = ({
  type,
  placeholder,
  width,
  height,
}) => {
  const { formState, register } = useFormContext<InputForm>();
  const TAError = formState.errors[type as keyof InputForm]?.message;

  let regexValue = /^/;
  let regexMessage = "";
  let lengthValueError = "";
  let maxLengthValue = 0;

  if (type === "moreInfo") {
    placeholder = "Дополнительные сведения...";
    maxLengthValue = 300;
    lengthValueError = `Не больше ${maxLengthValue} символов`;
    regexValue = stringRegex.value;
    regexMessage = stringRegex.message;
  } else {
    throw new Error(`CustomTextArea is broken!`);
  }

  return (
    <>
      <div style={{ height: "21px" }}>
        {TAError && <p style={{ color: "red", margin: "0" }}>{TAError}</p>}
      </div>
      <textarea
        placeholder={placeholder}
        style={{ width: width, height: height, resize: "none" }}
        {...register(type, {
          maxLength: {
            value: maxLengthValue,
            message: lengthValueError,
          },
          pattern: {
            value: regexValue,
            message: regexMessage,
          },
        })}
      />
    </>
  );
};

export default CustomTextArea;
