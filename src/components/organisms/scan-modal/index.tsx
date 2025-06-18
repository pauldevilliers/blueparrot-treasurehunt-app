import { useEffect, useRef, useState } from 'react';
import Button from '@/components/atoms/button';
import Modal from '@/components/atoms/modal';
import Video from '@/components/atoms/video';
import Alert from '@/components/atoms/alert';
import FadeIn from '@/components/atoms/fade-in';
import Loader from '@/components/atoms/loader';
import { captureVideoScreenshot } from '@/utils/camera';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onScan: (s: string) => void;
};

export default function ScanModal({ isOpen, onClose, onScan }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setVideoError(false);
      setVideoReady(false);
      setScanning(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scanning) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }, [scanning]);

  const handleScan = async () => {
    setScanning(true);
    try {
      const screenshot = captureVideoScreenshot(videoRef.current);
      if (!screenshot) {
        throw new Error('Error getting screenshot');
      }
      await onScan(screenshot);
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      setScanning(false);
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <Video
        ref={videoRef}
        className="absolute inset-0 w-[100%] h-[100%] object-cover rounded-md shadow-xl"
        onError={() => setVideoError(true)}
        onReady={() => setVideoReady(true)}
        scanning={scanning}
      />
      {videoReady ? (
        <FadeIn className="p-4 mt-auto flex flex-col justify-between items-center">
          <Button onClick={handleScan} className="!mb-5">
            Scan
          </Button>
          <Button className="mt-8 mb-5" onClick={onClose}>
            Back
          </Button>
        </FadeIn>
      ) : (
        <Loader />
      )}

      <Alert
        isOpen={videoError}
        onClose={() => {
          setVideoError(false);
          onClose();
        }}
        message="Please allow the use of camera in order to proceed with the game."
      />
    </Modal>
  );
}
