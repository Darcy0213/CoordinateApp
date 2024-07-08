import { blurBackdropFilter } from "@theme/referenceTokens/blurBackdropFilter";
import { boxShadow } from "@theme/referenceTokens/boxShadow";
import { ModalDimensions } from "@theme/types/theme";

const ModalElevation = (): ModalDimensions => {
  const blurBackdropFilterRT = blurBackdropFilter;
  const boxShadowRT = boxShadow;
  return {
    elevation_blur: {
      boxShadow: `${boxShadowRT[9].x}px ${boxShadowRT[9].y}px ${boxShadowRT[9].blur}px ${boxShadowRT[9].spread}px ${boxShadowRT[9].color}`,
      blurBackdropFilterRT: `${blurBackdropFilterRT[5]}px`,
    },
  };
};

export default ModalElevation;
