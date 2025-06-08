export const getCameraStream = () => {
  return navigator.mediaDevices.getUserMedia({ audio: false, video: true });
};

export const cleanUpStream = (stream: MediaStream) => {
  stream.getTracks().forEach((track) => track.stop());
};
