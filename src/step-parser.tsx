import { Children } from "react";

export function getStepsFromMDX(children) {
  const splits = [[]];

  Children.forEach(children, (child) => {
    if (child.props.mdxType === "hr") {
      splits.push([]);
    } else {
      const lastSplit = splits[splits.length - 1];
      lastSplit.push(child);
    }
  });

  const videoSteps = splits.map((split) => {
    const videoElement = split.find((child) => child.props.mdxType === "Video");
    return videoElement.props;
  });

  const browserSteps = splits.map((split) => {
    const browserElement = split.find(
      (child) => child.props.mdxType === "Browser"
    );
    const { children, ...rest } = browserElement.props;
    const actions = Children.map(children, (child) => child.props);
    return {
      actions,
      ...rest,
      url: "https://nextjsconf2020.pomb.us" + rest.loadUrl,
    };
  });

  const editorSteps = splits.map((split) => {
    const editorElement = split.find(
      (child) => child.props.mdxType === "Editor"
    );
    const { code, tab, ...rest } = editorElement.props;

    return {
      code: require(`!!raw-loader!../demo/${code}`).default,
      file: tab,
      ...rest,
    };
  });

  const captionSteps = splits.map((split) => {
    const pre = split.find(
      (child) =>
        child.props.mdxType === "pre" &&
        child.props.children.props.className === "language-srt"
    );
    if (!pre) return [];

    return parseSrt(
      decodeHtml(pre.props.children.props.dangerouslySetInnerHTML.__html)
    );
  });

  return {
    videoSteps,
    browserSteps,
    editorSteps,
    captionSteps,
  };
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function parseSrt(srt) {
  const regex = /^[\d\.\:]+\s+[–\-]>\s+[\d\.\:]+$/gm;
  const times = srt.match(regex);
  if (!times) return [];
  const [, ...texts] = srt.split(regex);
  return times.map((time, i) => {
    const [start, end] = time.match(/[\d\.]+/g).map((t) => +t);
    return { start, end, text: texts[i].trim() };
  });
}
