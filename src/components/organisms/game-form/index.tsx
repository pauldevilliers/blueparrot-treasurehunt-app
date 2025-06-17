import Form from '@/components/molecules/form';
import Checkbox from '@/components/atoms/checkbox';
import getFormField from '@/utils/getFormField';

type GameFormProps = {
  onSubmit: (values: { [key: string]: string }) => void;
  game: Game | null;
};

export default function GameForm({ onSubmit, game }: GameFormProps) {
  if (!game) return;
  return (
    <Form
      onSubmit={onSubmit}
      className="w-full max-w-xs mx-auto flex flex-col flex-grow"
      submitLabel="Play"
    >
      {game.fields.map((f) => getFormField(f, { className: '!mb-8' }))}
      {game.terms_checkbox_wordingISsmallplaintextbox && (
        <Checkbox
          name="terms"
          label={game.terms_checkbox_wordingISsmallplaintextbox}
          className="!mb-8"
        />
      )}
    </Form>
  );
}
