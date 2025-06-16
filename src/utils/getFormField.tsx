import Input from '@/components/atoms/input';
import DatePicker from '@/components/atoms/date-picker';
import UploadFile from '@/components/atoms/upload-file';
import { parseLabel } from './common';

export default function getFormField(
  { type, field }: FormField,
  others: unknown
) {
  const props = {
    required: true,
    name: field,
    label: parseLabel(field),
    ...(others || {}),
  };
  switch (type) {
    case 'text':
      return <Input key={field} {...props} />;
    case 'number':
      return <Input key={field} type="number" {...props} />;
    case 'email':
      return <Input key={field} type="email" {...props} />;
    case 'date':
      return <DatePicker key={field} {...props} />;
    case 'datetime':
      return <DatePicker key={field} {...props} />;
    case 'file':
      return <UploadFile key={field} {...props} />;
    default:
      return null;
  }
}
