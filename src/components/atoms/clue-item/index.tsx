import classNames from 'classnames';

type Props = {
  final?: boolean;
};

export default function ClueItem({ final = false }: Props) {
  return (
    <div
      className={classNames('bg-gray-200 h-[100px] mx-3 my-5 rounded-md', {
        'w-[100px]': !final,
        'w-[200px]': final,
      })}
    ></div>
  );
}
