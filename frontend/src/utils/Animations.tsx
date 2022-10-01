import { RefObject } from "react";

import { easeBounceOut, easeExpOut } from 'd3-ease';
import { interpolateString } from 'd3-interpolate';

function startAnimationLoop(
  duration: number,
  onProgress: (value: number) => void,
  onComplete?: () => void,
  initialProgress: number = 0
) {
  let start: number | null = null;
  let requestId: number = 0;

  const startTimeDiff = initialProgress * duration;

  const step = (timestamp: number) => {
    if (!start) start = timestamp - startTimeDiff;
    let progress = (timestamp - start) / duration;
    if (progress > 1) {
      progress = 1;
    }
    onProgress(progress);

    if (progress < 1) {
      requestId = window.requestAnimationFrame(step);
    } else {
      if (onComplete) {
        onComplete();
      }
    }
  };
  requestId = window.requestAnimationFrame(step);

  return {
    stop() {
      cancelAnimationFrame(requestId);
    },
  };
}

function getStyles(element: RefObject<HTMLElement>, props: any) {
  if (element.current) {
    const computed = window.getComputedStyle(element.current);
    return props.reduce((obj: any, prop: any) => {
      obj[prop] = computed[prop];
      return obj;
    }, {});
  }
}

/* custom animations */
function slide(
  element: RefObject<HTMLElement>,
  {
    duration,
    direction,
    onComplete,
  }: { duration: number; direction: string; onComplete?: () => void }
) {
  const collapsedStyles = {
    marginTop: "0px",
    marginBottom: "0px",
    height: "0px",
  };
  const props = Object.keys(collapsedStyles);

  const [startStyles, targetStyles] =
    direction === "DOWN"
      ? [collapsedStyles, getStyles(element, props)]
      : [getStyles(element, props), collapsedStyles];
  const interpolators = new Map(
    props.map((prop) => [
      prop,
      interpolateString(startStyles[prop], targetStyles[prop]),
    ])
  );

  return startAnimationLoop(
    duration,
    (progress) => {
      const delta = easeExpOut(progress);
      interpolators.forEach((interpolator, prop: any) => {
        if (element.current) element.current.style[prop] = interpolator(delta);
      });
    },
    onComplete
  );
}

function slideDown(element: RefObject<HTMLElement>, onComplete?: () => void) {
  return slide(element, { direction: "DOWN", duration: 750, onComplete });
}

function slideUp(element: RefObject<HTMLElement>, onComplete: () => void) {
  return slide(element, { direction: "UP", duration: 750, onComplete });
}

export { startAnimationLoop, slide, slideDown, slideUp };
