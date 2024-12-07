import { create } from "zustand";
import { instance } from "./instance";
import { AuthState } from "../store/types/auth";
import { AuthFormData } from "@/store/types";

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,

  login: async (payload: AuthFormData) => {
    const res = await instance.post("/auth/login", payload);
  },
  signUp: async (payload: AuthFormData) => {
    const res = await instance.post("/auth/register", payload);
    return res.data;
  },
  isUserLoggedIn: async () => {},
}));
