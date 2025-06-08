import Button from '@/components/atoms/button';
import FormInput from '@/components/atoms/input';
import Form from '@/components/molecules/form';
import Checkbox from '@/components/atoms/checkbox';

type GameFormProps = {
  onSubmit: () => void;
};

export default function GameForm({ onSubmit }: GameFormProps) {
  return (
    <Form
      onSubmit={onSubmit}
      className="max-w-xs mx-auto flex flex-col flex-grow"
    >
      <FormInput name="firstName" placeholder="First Name" className="mb-5" />
      <FormInput name="lastName" placeholder="Last Name" className="mb-5" />
      <FormInput name="email" placeholder="Email Address" className="mb-5" />
      <Checkbox
        name="terms"
        label="I agree for Social Jungle to use my personal data to personalize
          emails and communications about their products, services, events,
          promotions, and market research."
        className="mb-5"
      />
      <Button type="submit" className="mx-auto mt-auto">
        Sign up
      </Button>
    </Form>
  );
}
