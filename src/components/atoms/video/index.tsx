import { useEffect, useRef } from 'react';
import { cleanUpStream, getCameraStream } from '@/utils/camera';

type VideoProps = {
  className?: string;
  onError: () => void;
  onReady: () => void;
};

export default function Video({ className, onError, onReady }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoStream = useRef<MediaStream>(null);
  useEffect(() => {
    let isCancelled = false;
    getCameraStream()
      .then((stream) => {
        if (isCancelled) {
          cleanUpStream(stream);
          return;
        }
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoStream.current = stream;
          onReady();
        }
      })
      .catch(onError);
    return () => {
      isCancelled = true;
      if (videoStream.current) {
        cleanUpStream(videoStream.current);
        videoStream.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <video ref={videoRef} autoPlay muted playsInline className={className} />
  );
}
