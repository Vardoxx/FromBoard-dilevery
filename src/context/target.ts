import { createContext, RefObject } from "react";
interface TargetContextType {
  targetCalculator: RefObject<HTMLElement>;
  targetCalculatorHanndleClick: () => void;
  targetGarant: RefObject<HTMLElement>;
  targetGarantHanndleClick: () => void;
  targetFeedback: RefObject<HTMLElement>;
  targetFeedbackHanndleClick: () => void;
}
export const TargetContext = createContext<TargetContextType | null>(null);
