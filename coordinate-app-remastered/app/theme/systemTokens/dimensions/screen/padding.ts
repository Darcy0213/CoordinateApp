import { dimensions } from "@theme/referenceTokens/dimensions";

const PaddingScreen = (laptopDesktop: boolean, tablet: boolean) => {
  return {
    default: laptopDesktop
      ? dimensions[100]
      : tablet
      ? dimensions[50]
      : dimensions[0],
  };
};

export default PaddingScreen;
