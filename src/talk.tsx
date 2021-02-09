import { useCurrentFrame } from "remotion";
import "./talk.css";
import { Gradient } from "./gradient";
import { MiniBrowser } from "@code-hike/mini-browser";
import { IFrame } from "./iframe";

export function Talk() {
  return (
    <Center>
      <main className="grid">
        <div className="slot-1">
          <Placeholder />
        </div>
        <div className="slot-2">
          <MiniBrowser
            style={{ height: "100%" }}
            steps={browserSteps}
            progress={0}
          >
            <IFrame src="https://nextjsconf2020.pomb.us/03" />
          </MiniBrowser>
        </div>
        <Gradient className="slot-3">
          <Placeholder />
        </Gradient>
      </main>
    </Center>
  );
}

const browserSteps = [{ url: "https://nextjsconf2020.pomb.us/03", zoom: 0.7 }];

function Center({ children }: { children: React.ReactNode }) {
  return (
    <div className="talk-container">
      <div className="talk-scale">{children}</div>
    </div>
  );
}

function Placeholder() {
  return (
    <div
      style={{
        height: "100%",
        background: "#222",
        borderRadius: "8px",
        color: "white",
        fontSize: "3em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {useCurrentFrame()}
    </div>
  );
}
