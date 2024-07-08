import { blurBackdropFilter } from "@theme/referenceTokens/blurBackdropFilter";
import { Background } from "@theme/types/theme";

const BackgroundProperties = (): Background => {
  const blurBackdropFilterRT = blurBackdropFilter;

  return {
    blur: {
      1: `blur(${blurBackdropFilterRT[1]}px)`,
      2: `blur(${blurBackdropFilterRT[2]}px)`,
      3: `blur(${blurBackdropFilterRT[3]}px)`,
      4: `blur(${blurBackdropFilterRT[4]}px)`,
    },
  };
};

export default BackgroundProperties;
