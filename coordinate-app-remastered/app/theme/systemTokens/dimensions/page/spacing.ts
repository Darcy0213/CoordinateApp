import { SimpleDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const PageSpacing = (
  laptopDesktop: boolean,
  tablet: boolean,
  mobile: boolean
): SimpleDimensions => {
  return {
    st1: laptopDesktop
      ? dimensions[175]
      : tablet
      ? dimensions[150]
      : dimensions[125],
    st2: laptopDesktop
      ? dimensions[150]
      : tablet
      ? dimensions[100]
      : dimensions[75],
    st3: laptopDesktop
      ? dimensions[125]
      : tablet
      ? dimensions[75]
      : dimensions[50],
    t1: laptopDesktop
      ? dimensions[200]
      : tablet
      ? dimensions[175]
      : dimensions[150],
    h1: laptopDesktop
      ? dimensions[500]
      : tablet
      ? dimensions[400]
      : dimensions[300],
    h2: laptopDesktop
      ? dimensions[400]
      : tablet
      ? dimensions[300]
      : dimensions[250],
    h3: laptopDesktop
      ? dimensions[300]
      : tablet
      ? dimensions[250]
      : dimensions[200],
    h4: laptopDesktop
      ? dimensions[250]
      : tablet
      ? dimensions[200]
      : dimensions[200],
  };
};

export default PageSpacing;
