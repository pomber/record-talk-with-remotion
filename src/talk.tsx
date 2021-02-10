import Content from "./steps.mdx";
import { TalkLayout } from "./talk-layout";
import { MDXProvider } from "@mdx-js/react";
import { useMemo } from "react";
import { getStepsFromMDX } from "./step-parser";

export function Talk() {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  );
}
const components = {
  wrapper: Wrapper,
};

function Wrapper({ children }) {
  const steps = useMemo(() => getStepsFromMDX(children), []);

  const { videoSteps, browserSteps, editorSteps, captionSteps } = steps;
  return (
    <TalkLayout
      videoSteps={videoSteps}
      browserSteps={browserSteps}
      editorSteps={editorSteps}
      captionSteps={captionSteps}
    />
  );
}
