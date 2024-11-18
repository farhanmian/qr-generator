export type AuthFormData = {
  name?: string; // Optional for signup
  email: string;
  password: string;
  avatar?: string;
};

export type Nullable<T> = T | null;
