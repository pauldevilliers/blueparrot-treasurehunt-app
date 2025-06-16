import classNames from 'classnames';
import Text from '../text';

type Props = {
  final?: boolean;
  label?: string | number;
};

export default function ClueItem({ final = false, label }: Props) {
  return (
    <div
      className={classNames(
        'bg-gray-200 h-[100px] mx-3 my-5 rounded-md flex justify-center items-center',
        {
          'w-[100px]': !final,
          'w-[200px]': final,
        }
      )}
    >
      {label && <Text className="text-5xl">{label}</Text>}
    </div>
  );
}
