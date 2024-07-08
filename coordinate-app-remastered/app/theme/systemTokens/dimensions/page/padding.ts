import { PagePadding as PagePaddingDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const PagePadding = (
  laptopDesktop: boolean,
  tablet: boolean,
  mobile: boolean
): PagePaddingDimensions => {
  return {
    st1: laptopDesktop
      ? dimensions[200]
      : tablet
      ? dimensions[300]
      : dimensions[125],
    h5: laptopDesktop
      ? dimensions[500]
      : tablet
      ? dimensions[400]
      : dimensions[300],
    h4: laptopDesktop
      ? dimensions[500]
      : tablet
      ? dimensions[400]
      : dimensions[300],
    table: laptopDesktop
      ? dimensions[0]
      : tablet
      ? dimensions[0]
      : dimensions[0],
    small: laptopDesktop
      ? dimensions[500]
      : tablet
      ? dimensions[175]
      : dimensions[150],
    medium: laptopDesktop
      ? dimensions[1000]
      : tablet
      ? dimensions[350]
      : dimensions[225],
    large: laptopDesktop
      ? dimensions[2000]
      : tablet
      ? dimensions[500]
      : dimensions[250],
  };
};

export default PagePadding;
