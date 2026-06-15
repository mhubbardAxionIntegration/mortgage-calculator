import type { MortgageInputs } from "./mortgage";
import { SITE } from "./site";

export const DEFAULT_INPUTS: MortgageInputs = {
  homePrice: 350000,
  downPayment: 70000, // 20%
  annualRate: SITE.defaultRate,
  termYears: 30,
  propertyTaxRate: 1.1,
  annualHomeInsurance: 1600,
  monthlyHoa: 0,
  pmiRate: 0.5,
};
