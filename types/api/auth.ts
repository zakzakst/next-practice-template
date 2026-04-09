import { User } from "@/types/domain/user";

// Register
export type AuthRegisterRequest = {
  email: string;
  password: string;
};

// Login
export type AuthLoginRequest = {
  email: string;
  password: string;
};

export type AuthLoginResponse = {
  message: string;
  ok: boolean;
};

// Me
export type AuthMe = Omit<User, "password">;

export type AuthMeResponse = AuthMe | null;
