import { Composition } from "remotion";
import { Talk } from "./talk";

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="Talk"
        component={Talk}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
