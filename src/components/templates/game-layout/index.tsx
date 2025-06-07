import Text from '@/components/atoms/text';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GameLayout({ children, className }: Props) {
  return (
    <div className="w-full mt-[10vh] mb-10">
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
      <div className={className}>{children}</div>
    </div>
  );
}
