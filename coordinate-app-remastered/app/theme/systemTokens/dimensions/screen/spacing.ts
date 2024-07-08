import { dimensions } from "@theme/referenceTokens/dimensions";

const SpacingScreen = (laptopDesktop: boolean) => {
  return {
    default: laptopDesktop ? dimensions[100] : dimensions[0],
  };
};

export default SpacingScreen;
