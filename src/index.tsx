import { registerRoot } from "remotion";
import { Composition } from "remotion";
import { Talk } from "./talk";

function RemotionVideo() {
  return (
    <>
      <Composition
        id="Talk"
        component={Talk}
        durationInFrames={6500}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
}

registerRoot(RemotionVideo);
