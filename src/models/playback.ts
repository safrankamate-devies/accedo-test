export function playVideo(src: string, element: HTMLVideoElement) {
  element.src = src;
  element.load();
  element.play();
}

export function pauseVideo(element: HTMLVideoElement) {
  element.pause();
}

export function unpauseVideo(element: HTMLVideoElement) {
  element.play();
}

export function seekVideo(element: HTMLVideoElement, dir: 1 | -1) {
  element.currentTime = element.currentTime + dir * 10;
}

export function getProgress(element: HTMLVideoElement) {
  return element.currentTime / element.duration;
}

export function seekToPoint(element: HTMLVideoElement, r: number) {
  element.currentTime = r * element.duration;
}
