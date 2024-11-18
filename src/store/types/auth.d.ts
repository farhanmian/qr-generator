import { AuthFormData, Nullable } from "../types";

export type User = {
  token: string;
};

export type SignUpResponse = {
  name: string;
  email: string;
  avatar: string;
  about: string | null;
  id: string;
};

export interface AuthState {
  user: Nullable<User>;

  login: (payload: AuthFormData) => Promise<>;
  signUp: (payload: AuthFormData) => Promise<SignUpResponse>;
  isUserLoggedIn: () => Promise<void>;
}
