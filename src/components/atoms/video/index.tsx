import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cleanUpStream, getCameraStream } from '@/utils/camera';

type VideoProps = {
  className?: string;
  onError: () => void;
  onReady: () => void;
  scanning?: boolean;
};

export default function Video({
  className,
  onError,
  onReady,
  scanning = false,
}: VideoProps) {
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

  useEffect(() => {
    if (scanning) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }, [scanning]);
  return (
    <>
      <video ref={videoRef} autoPlay muted playsInline className={className} />
      {scanning && (
        <motion.div
          className="absolute top-0 left-0 w-full h-[5px] bg-red-500 opacity-75 pointer-events-none"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </>
  );
}
