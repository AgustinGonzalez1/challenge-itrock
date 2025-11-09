import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';
export interface InputFormProps<T extends FieldValues> {
  title: string;
  type: string;
  field: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  children?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}
