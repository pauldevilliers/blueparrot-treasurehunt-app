import Input from '@/components/atoms/input';

export default function getFormField(
  { type, field }: FormField,
  others: unknown
) {
  const props = { required: true, ...(others || {}) };
  switch (type) {
    case 'text':
      return <Input key={field} name={field} placeholder={field} {...props} />;
    case 'number':
      return (
        <Input
          key={field}
          name={field}
          placeholder={field}
          type="number"
          {...props}
        />
      );
    case 'email':
      return (
        <Input
          key={field}
          name={field}
          placeholder={field}
          type="email"
          rules={[{ type: 'email', message: 'Invalid email format' }]}
          {...props}
        />
      );

    case 'date':
    case 'datetime':
    case 'file':
    default:
      return null;
  }
}
