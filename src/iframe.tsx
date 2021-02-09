import { useCallback, useState } from "react";
import { continueRender, delayRender } from "remotion";

function useResumer() {
  const [handle] = useState(() => delayRender());

  const resumeRender = useCallback(() => {
    continueRender(handle);
  }, [handle]);

  return resumeRender;
}

// from https://github.com/JonnyBurger/remotion/issues/29#issuecomment-776038209
// should be included in remotion soon

export const IFrame: React.FC<
  Omit<
    React.DetailedHTMLProps<
      React.IframeHTMLAttributes<HTMLIFrameElement>,
      HTMLIFrameElement
    >,
    "onLoad"
  >
> = (props) => {
  const onLoad = useResumer();
  return <iframe {...props} onLoad={onLoad} />;
};
