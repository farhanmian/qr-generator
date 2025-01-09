import { create } from "zustand";
import { instance } from "./instance";
import { AuthState } from "../store/types/auth";
import { AuthFormData } from "@/store/types";

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,

  login: async (payload: AuthFormData) => {
    const res = await instance.post("/auth/login", payload);
    console.log(res, "RESPONSE");
    // localStorage.setItem("token", res.data?.token);
  },
  signUp: async (payload: AuthFormData) => {
    const res = await instance.post("/auth/register", payload);
    return res.data;
  },
  isUserLoggedIn: async () => {},
}));
