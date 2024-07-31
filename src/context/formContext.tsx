import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface InputForm {
  name: string;
  email: string;
  tel: string;
  area: string;
  weight: string;
  buyCountry: string;
  buyCity: string;
  diliveryRegion: string;
  diliveryCity: string;
  productType: string;
  questionType: string;
  message: string;
}

export const FormContext = ({ children }: PropsWithChildren) => {
  const methods = useForm<InputForm>({
    mode: "onChange",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
