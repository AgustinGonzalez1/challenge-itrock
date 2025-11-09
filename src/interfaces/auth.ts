// Interfaces for authentication forms
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => Promise<void> | void;
  isLoading?: boolean;
}

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
