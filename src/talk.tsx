import { useCurrentFrame } from "remotion";
import "./talk.css";
import { Gradient } from "./gradient";

export function Talk() {
  return (
    <Center>
      <main className="grid">
        <div className="slot-1">
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
        </div>
        <div className="slot-2">
          <div
            style={{
              height: "100%",
              background: "#222",
              borderRadius: "8px",
            }}
          ></div>
        </div>
        <Gradient className="slot-3">
          <div
            style={{
              height: "100%",
              background: "#222",
              borderRadius: "8px",
            }}
          ></div>
        </Gradient>
      </main>
    </Center>
  );
}

function Center({ children }: { children: React.ReactNode }) {
  return (
    <div className="talk-container">
      <div className="talk-scale">{children}</div>
    </div>
  );
}
