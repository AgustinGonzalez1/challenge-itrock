export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface RegisterFormProps {
  onSubmit?: (data: RegisterFormData) => Promise<void> | void;
  isLoading?: boolean;
}
