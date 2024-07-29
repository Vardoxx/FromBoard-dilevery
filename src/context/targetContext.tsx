import { createContext, RefObject, useRef, useContext } from "react";
interface TargetContextType {
  targetCalculator: RefObject<HTMLElement>;
  targetCalculatorHanndleClick: () => void;
  targetGarant: RefObject<HTMLElement>;
  targetGarantHanndleClick: () => void;
  targetFeedback: RefObject<HTMLElement>;
  targetFeedbackHanndleClick: () => void;
}
export const TargetContext = createContext<TargetContextType | null>(null);

export const TargetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const targetCalculator: RefObject<HTMLElement> = useRef(null);
  const targetGarant: RefObject<HTMLElement> = useRef(null);
  const targetFeedback: RefObject<HTMLElement> = useRef(null);

  const TargetIntoObject = (ref: RefObject<HTMLElement>) => () => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <TargetContext.Provider
      value={{
        targetCalculator,
        targetCalculatorHanndleClick: TargetIntoObject(targetCalculator),
        targetGarant,
        targetGarantHanndleClick: TargetIntoObject(targetGarant),
        targetFeedback,
        targetFeedbackHanndleClick: TargetIntoObject(targetFeedback),
      }}
    >
      {children}
    </TargetContext.Provider>
  );
};

/* eslint-disable react-refresh/only-export-components */
export const useTargetContext = () => {
  const context = useContext(TargetContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  if (
    !context ||
    !context.targetCalculatorHanndleClick ||
    !context.targetGarantHanndleClick ||
    !context.targetFeedbackHanndleClick
  ) {
    throw new Error(
      "TargetContext is not available or targetCalculatorHanndleClick is missing"
    );
  }

  return context;
};
