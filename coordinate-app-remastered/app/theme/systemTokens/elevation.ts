import { blurBackdropFilter } from "@theme/referenceTokens/blurBackdropFilter";
import { boxShadow } from "@theme/referenceTokens/boxShadow";
import { Elevation as ElevationType } from "@theme/types/theme";

const Elevation = (): ElevationType => {
  const boxShadowRT = boxShadow;
  const blurBackdropFilterRT = blurBackdropFilter;
  /* boxShadow css propertie sintaxis
	box-shadow: offsetX offsetY blurRadius spreadRadius color
	Example: 0px 0px 0px 0px rgba(0,0,0,0.15) */

  return {
    1: `${boxShadowRT[1].x}px ${boxShadowRT[1].y}px ${boxShadowRT[1].blur}px ${boxShadowRT[1].spread}px ${boxShadowRT[1].color}, ${boxShadowRT[2].x}px ${boxShadowRT[2].y}px ${boxShadowRT[2].blur}px ${boxShadowRT[2].spread}px ${boxShadowRT[2].color}`,
    2: `${boxShadowRT[1].x}px ${boxShadowRT[1].y}px ${boxShadowRT[1].blur}px ${boxShadowRT[1].spread}px ${boxShadowRT[1].color}, ${boxShadowRT[3].x}px ${boxShadowRT[3].y}px ${boxShadowRT[3].blur}px ${boxShadowRT[3].spread}px ${boxShadowRT[3].color}`,
    3: `${boxShadowRT[4].x}px ${boxShadowRT[4].y}px ${boxShadowRT[4].blur}px ${boxShadowRT[4].spread}px ${boxShadowRT[4].color}, ${boxShadowRT[5].x}px ${boxShadowRT[5].y}px ${boxShadowRT[5].blur}px ${boxShadowRT[5].spread}px ${boxShadowRT[5].color}`,
    4: `${boxShadowRT[6].x}px ${boxShadowRT[6].y}px ${boxShadowRT[6].blur}px ${boxShadowRT[6].spread}px ${boxShadowRT[6].color}, ${boxShadowRT[5].x}px ${boxShadowRT[5].y}px ${boxShadowRT[5].blur}px ${boxShadowRT[5].spread}px ${boxShadowRT[5].color}`,
    5: `${boxShadowRT[7].x}px ${boxShadowRT[7].y}px ${boxShadowRT[7].blur}px ${boxShadowRT[7].spread}px ${boxShadowRT[7].color}, ${boxShadowRT[8].x}px ${boxShadowRT[8].y}px ${boxShadowRT[8].blur}px ${boxShadowRT[8].spread}px ${boxShadowRT[8].color}`,
    "1_blur": {
      boxShadow: `${boxShadowRT[4].x}px ${boxShadowRT[4].y}px ${boxShadowRT[4].blur}px ${boxShadowRT[4].spread}px ${boxShadowRT[4].color}, ${boxShadowRT[1].x}px ${boxShadowRT[1].y}px ${boxShadowRT[1].blur}px ${boxShadowRT[1].spread}px ${boxShadowRT[1].color}`,
      blurBackdropFilter: `blur(${blurBackdropFilterRT[5]})px`,
    },
  };
};

export default Elevation;
