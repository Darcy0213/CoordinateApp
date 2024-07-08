import { dimensions } from "@theme/referenceTokens/dimensions";

const WidthScreen = (laptopDesktop: boolean, tablet: boolean) => {
  return {
    min: laptopDesktop
      ? dimensions[15000]
      : tablet
      ? dimensions[7500]
      : dimensions[4000],
    max: laptopDesktop
      ? dimensions[19200]
      : tablet
      ? dimensions[11250]
      : dimensions[7500],
  };
};

export default WidthScreen;
