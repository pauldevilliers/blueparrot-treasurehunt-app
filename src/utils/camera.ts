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

export const captureVideoScreenshot = (video?: HTMLVideoElement | null) => {
  if (!video) return;

  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const base64Image = canvas.toDataURL('image/png');
  canvas.remove();

  return base64Image;
};

export const generateImageObject = (dataURL: string, clueId?: string) => {
  const base64String = dataURL.split(',')[1];
  const padding = (base64String.match(/=+$/) || [''])[0].length;
  const sizeInBytes = (base64String.length * 3) / 4 - padding;
  return {
    name: `clue_${clueId}_${Date.now()}.png`,
    size: sizeInBytes,
    type: 'image/png',
    data: dataURL,
  };
};
