import { WidthDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const PageWidth = (
  laptop: boolean,
  desktop: boolean,
  tablet: boolean
): WidthDimensions => {
  return {
    max: desktop
      ? dimensions[19200]
      : laptop
      ? dimensions[15000]
      : tablet
      ? dimensions[11500]
      : dimensions[7500],
    min: desktop
      ? dimensions[15000]
      : laptop
      ? dimensions[11250]
      : tablet
      ? dimensions[7500]
      : dimensions[4000],
  };
};

export default PageWidth;
