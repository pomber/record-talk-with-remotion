import {
  IFrame,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";
import { Gradient } from "./gradient";
import { MiniBrowser } from "@code-hike/mini-browser";
import speaker from "./speaker.webm";
import { MiniEditor } from "@code-hike/mini-editor";
import "./talk.css";

export function TalkLayout({
  editorSteps,
  videoSteps,
  captionSteps,
  browserSteps,
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;

  const currentStepIndex = videoSteps.findIndex(
    (step) => step.start <= t && t < step.end
  );
  const prevStepIndex = Math.max(0, currentStepIndex - 1);
  const currentStep = videoSteps[currentStepIndex];
  const currentStepFirstFrame = currentStep.start * fps;

  const progress = spring({
    frame: frame - currentStepFirstFrame,
    from: prevStepIndex,
    to: currentStepIndex,
    fps,
    config: {
      stiffness: 70,
      damping: 200,
      mass: 1,
    },
  });

  const browserStep = browserSteps[currentStepIndex];

  const caption = captionSteps[currentStepIndex].find(
    (step) => step.start <= t && t < step.end
  );

  return (
    <Center>
      <main className="grid">
        <div className="slot-1">
          <MiniEditor
            style={{ height: "100%" }}
            steps={editorSteps}
            progress={progress}
          />
        </div>
        <div className="slot-2">
          <MiniBrowser
            style={{ height: "100%" }}
            steps={browserSteps}
            progress={0}
          >
            <IFrame
              src={"https://nextjsconf2020.pomb.us" + browserStep.loadUrl}
            />
          </MiniBrowser>
        </div>
        <Gradient className="slot-3">
          <SpeakerPanel caption={caption?.text} />
        </Gradient>
      </main>
    </Center>
  );
}

function SpeakerPanel({ caption }) {
  return (
    <div className="speaker-panel">
      <div className="video-container">
        <div className="h-full">
          <div className="video-wrapper">
            <Video src={speaker} />
          </div>
        </div>
      </div>
      <div className="captions-container">
        <div className="captions">{caption}</div>
      </div>
    </div>
  );
}

function Center({ children }: { children: React.ReactNode }) {
  return (
    <div className="talk-container">
      <div className="talk-scale">{children}</div>
    </div>
  );
}
