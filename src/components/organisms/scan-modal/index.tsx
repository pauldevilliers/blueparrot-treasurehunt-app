import { useEffect, useState } from 'react';
import Button from '@/components/atoms/button';
import Modal from '@/components/atoms/modal';
import Video from '@/components/atoms/video';
import Alert from '@/components/atoms/alert';
import FadeIn from '@/components/atoms/fade-in';
import Loader from '@/components/atoms/loader';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ScanModal({ isOpen, onClose }: Props) {
  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setVideoError(false);
      setVideoReady(false);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen}>
      <Video
        className="absolute inset-0 w-[100%] h-[100%] object-cover rounded-md shadow-xl"
        onError={() => setVideoError(true)}
        onReady={() => setVideoReady(true)}
      />
      {videoReady ? (
        <FadeIn className="p-4 mt-auto flex flex-col justify-between items-center">
          <Button>Scan</Button>
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
