// * `POST /api/auth/register` : 新規ユーザー登録
// * `POST /api/auth/login`    : ログイン
// * `POST /api/auth/logout`   : ログアウト
// * `GET    /api/users/me`    : ログインユーザーのプロフィール情報取得 [ログインユーザー]
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
  accessToken: string;
};

// Me
export type AuthMe = Omit<User, "password">;

export type AuthMeResponse = AuthMe;
