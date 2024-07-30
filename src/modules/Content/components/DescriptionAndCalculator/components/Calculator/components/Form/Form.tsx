import Input from "../../../../../../../../ui/Input/Input";
import s from "./Form.module.scss";
import { useEffect, useState } from "react";
import Button from "../../../../../../../../ui/Button/Button";

const Inputs = () => {
  const requair: string = "Обязательное поле";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [area, setArea] = useState("");
  const [weight, setWeight] = useState("");
  const [buyCountry, setBuyCountry] = useState("");
  const [buyCity, setBuyCity] = useState("");
  const [diliveryRegion, setDiliveryRegion] = useState("");
  const [diliveryCity, setDiliveryCity] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [telDirty, setTelDirty] = useState(false);
  const [areaDirty, setAreaDirty] = useState(false);
  const [weightDirty, setWeightDirty] = useState(false);
  const [buyCountryDirty, setBuyCountryDirty] = useState(false);
  const [buyCityDirty, setBuyCityDirty] = useState(false);
  const [diliveryRegionDirty, setDiliveryRegionDirty] = useState(false);
  const [diliveryCityDirty, setDiliveryCityDirty] = useState(false);

  const [nameError, setNameError] = useState(requair);
  const [emailError, setEmailError] = useState(requair);
  const [telError, setTelError] = useState(requair);
  const [areaError, setAreaError] = useState(requair);
  const [weightError, setWeightError] = useState(requair);
  const [buyCountryError, setBuyCountryError] = useState(requair);
  const [buyCityError, setBuyCityError] = useState(requair);
  const [diliveryRegionError, setDiliveryRegionError] = useState(requair);
  const [diliveryCityError, setDiliveryCityError] = useState(requair);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      nameError ||
      emailError ||
      telError ||
      areaError ||
      weightError ||
      buyCountryError ||
      buyCityError ||
      diliveryRegionError ||
      diliveryCityError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    nameError,
    emailError,
    telError,
    areaError,
    weightError,
    buyCountryError,
    buyCityError,
    diliveryRegionError,
    diliveryCityError,
  ]);

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "tel":
        setTelDirty(true);
        break;
      case "area":
        setAreaDirty(true);
        break;
      case "weight":
        setWeightDirty(true);
        break;
      case "buyCountry":
        setBuyCountryDirty(true);
        break;
      case "buyCity":
        setBuyCityDirty(true);
        break;
      case "diliveryRegion":
        setDiliveryRegionDirty(true);
        break;
      case "diliveryCity":
        setDiliveryCityDirty(true);
        break;
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Update the email state
    const re = /^[A-Za-zА-Яа-я]+$/;
    // Check if the email does NOT match the regex pattern
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError("Только буквенное значение"); // Set the error message if the email is invalid
    } else {
      setNameError(""); // Clear the error message if the email is valid
    }
    if (e.target.value.length === 0) {
      setNameError(requair);
    }
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Update the email state
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    // Check if the email does NOT match the regex pattern
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Email некорректен"); // Set the error message if the email is invalid
    } else {
      setEmailError("");
    }
    if (e.target.value.length === 0) {
      setEmailError(requair);
    }
  };

  const telHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value); // Update the email state
    const re = /^[0-9]+$/;
    // Check if the email does NOT match the regex pattern
    if (!re.test(String(e.target.value).toLowerCase())) {
      setTelError("Номер телефона некорректен"); // Set the error message if the email is invalid
    } else {
      setTelError("");
    }
    if (e.target.value.length === 0) {
      setTelError(requair);
    }
  };

  const areaHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value); // Update the email state
    const re = /^[0-9]+$/;
    // Check if the email does NOT match the regex pattern
    if (!re.test(String(e.target.value).toLowerCase())) {
      setAreaError("Только числовое"); // Set the error message if the email is invalid
    } else {
      setAreaError("");
    }
    if (e.target.value.length === 0) {
      setAreaError(requair);
    }
    if (e.target.value.length > 2) {
      setAreaError("До 99м²");
    }
  };

  const weightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value); // Update the email state
    const re = /^[0-9]*(\.[0-9]*)?$/;
    // Check if the email does NOT match the regex pattern
    if (!re.test(String(e.target.value).toLowerCase())) {
      setWeightError("Только числовое"); // Set the error message if the email is invalid
    } else {
      setWeightError("");
    }
    if (e.target.value.length === 0) {
      setWeightError(requair);
    }
    if (e.target.value.length > 3) {
      setWeightError("До 999кг");
    }
  };

  const buyCountryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyCountry(e.target.value); // Update the email state
    const re = /^[A-Za-zА-Яа-я ]+$/;
    // Check if the email does NOT match the regex pattern
    if (!re.test(String(e.target.value).toLowerCase())) {
      setBuyCountryError("Только буквенное значение"); // Set the error message if the email is invalid
    } else {
      setBuyCountryError("");
    }
    if (e.target.value.length === 0) {
      setBuyCountryError(requair);
    }
  };

  const buyCityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyCity(e.target.value); // Update the email state
    const re = /^[A-Za-zА-Яа-я ]+$/;
    // Check if the email does NOT match the regex pattern
    if (!re.test(String(e.target.value).toLowerCase())) {
      setBuyCityError("Только буквенное значение"); // Set the error message if the email is invalid
    } else {
      setBuyCityError("");
    }
    if (e.target.value.length === 0) {
      setBuyCityError(requair);
    }
  };

  const deliveryRegionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiliveryRegion(e.target.value); // Update the email state
    const re = /^[A-Za-zА-Яа-я ]+$/;
    // Check if the email does NOT match the regex pattern
    if (!re.test(String(e.target.value).toLowerCase())) {
      setDiliveryRegionError("Только буквенное значение"); // Set the error message if the email is invalid
    } else {
      setDiliveryRegionError("");
    }
    if (e.target.value.length === 0) {
      setDiliveryRegionError(requair);
    }
  };

  const deliveryCityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiliveryCity(e.target.value); // Update the email state
    const re = /^[A-Za-zА-Яа-я ]+$/;
    // Check if the email does NOT match the regex pattern
    if (!re.test(String(e.target.value).toLowerCase())) {
      setDiliveryCityError("Только буквенное значение"); // Set the error message if the email is invalid
    } else {
      setDiliveryCityError("");
    }
    if (e.target.value.length === 0) {
      setDiliveryCityError(requair);
    }
  };

  return (
    <form>
      <div className={s.input_container}>
        <div className={s.top_input}>
          {nameDirty && nameError && (
            <span style={{ color: "red" }}>{nameError}</span>
          )}
          <Input
            onChange={nameHandler}
            value={name}
            onBlur={(e) => blurHandler(e)}
            name="name"
            type="name"
            placeholder="Имя"
            width="496px"
          />
        </div>

        <div className={s.middle_inputs}>
          <div>
            <div style={{ height: "21px" }}>
              {emailDirty && emailError && (
                <span style={{ color: "red" }}>{emailError}</span>
              )}
            </div>
            <Input
              onChange={(e) => emailHandler(e)}
              value={email}
              onBlur={(e) => blurHandler(e)}
              name="email"
              maxLength={100}
              type="email"
              placeholder="Почта"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {telDirty && telError && (
                <span style={{ color: "red" }}>{telError}</span>
              )}
            </div>
            <Input
              onChange={(e) => telHandler(e)}
              value={tel}
              onBlur={(e) => blurHandler(e)}
              name="tel"
              maxLength={100}
              type="tel"
              placeholder="Телефон"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {areaDirty && areaError && (
                <span style={{ color: "red" }}>{areaError}</span>
              )}
            </div>
            <Input
              onChange={(e) => areaHandler(e)}
              value={area}
              onBlur={(e) => blurHandler(e)}
              name="area"
              maxLength={100}
              type="text"
              placeholder="Общая площадь, м²"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {weightDirty && weightError && (
                <span style={{ color: "red" }}>{weightError}</span>
              )}
            </div>
            <Input
              onChange={(e) => weightHandler(e)}
              value={weight}
              onBlur={(e) => blurHandler(e)}
              name="weight"
              maxLength={100}
              type="text"
              placeholder="Общий вес, кг"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {buyCountryDirty && buyCountryError && (
                <span style={{ color: "red" }}>{buyCountryError}</span>
              )}
            </div>
            <Input
              onChange={(e) => buyCountryHandler(e)}
              value={buyCountry}
              onBlur={(e) => blurHandler(e)}
              name="buyCountry"
              maxLength={100}
              type="text"
              placeholder="Страна покупки"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {buyCityDirty && buyCityError && (
                <span style={{ color: "red" }}>{buyCityError}</span>
              )}
            </div>
            <Input
              onChange={(e) => buyCityHandler(e)}
              value={buyCity}
              onBlur={(e) => blurHandler(e)}
              name="buyCity"
              maxLength={100}
              type="text"
              placeholder="Город покупки"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {diliveryRegionDirty && diliveryRegionError && (
                <span style={{ color: "red" }}>{diliveryRegionError}</span>
              )}
            </div>
            <Input
              onChange={(e) => deliveryRegionHandler(e)}
              value={diliveryRegion}
              onBlur={(e) => blurHandler(e)}
              name="diliveryRegion"
              maxLength={100}
              type="text"
              placeholder="Область доставки"
            />
          </div>

          <div>
            <div style={{ height: "21px" }}>
              {diliveryCityDirty && diliveryCityError && (
                <span style={{ color: "red" }}>{diliveryCityError}</span>
              )}
            </div>
            <Input
              onChange={(e) => deliveryCityHandler(e)}
              value={diliveryCity}
              onBlur={(e) => blurHandler(e)}
              name="diliveryCity"
              maxLength={100}
              type="text"
              placeholder="Город доставки"
            />
          </div>
        </div>
        <Button
          type="button"
          width={"auto"}
          height={"auto"}
          label="Заказать расчёт"
          disabled={!formValid}
        />
      </div>
    </form>
  );
};

export default Inputs;
