export const getCameraStream = () => {
  return navigator.mediaDevices.getUserMedia({ audio: false, video: true });
};

export const cleanUpStream = (stream: MediaStream) => {
  stream.getTracks().forEach((track) => track.stop());
};

export const captureImageFromVideo = (videoElement: HTMLVideoElement) => {
  const canvas = document.createElement('canvas');
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png');
  });
};
