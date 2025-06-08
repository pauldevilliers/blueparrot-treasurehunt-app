import Text from '@/components/atoms/text';
import FadeIn from '@/components/atoms/fade-in';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GameLayout({ children, className }: Props) {
  return (
    <div className="w-full my-[10vh] min-h-[80vh] flex flex-col">
      <div className="flex justify-center">
        <Text
          variant="h1"
          className="text-5xl/12 font-bold text-orange-500 uppercase mb-12"
        >
          Social
          <br />
          Jungle
        </Text>
      </div>
      <FadeIn className={classNames('flex-grow flex flex-col', className)}>
        {children}
      </FadeIn>
    </div>
  );
}
