"use client";

import { useCallback } from "react";
import { createContext, useContext } from "react";

import { useRouter } from "next/navigation";

import { useAuthLogout, useAuthMe } from "@/hooks/useAuth";
import { AuthMeResponse } from "@/types/api/auth";

type AuthContextType = {
  me?: AuthMeResponse | null;
  isLoading: boolean;
  isMutating: boolean;
  meMutate: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { data: me, isLoading, mutate } = useAuthMe();
  const { trigger, isMutating } = useAuthLogout();

  const meMutate = useCallback(async () => {
    mutate();
  }, [mutate]);

  const logout = useCallback(async () => {
    await trigger();
    await mutate();
    router.push("/login");
  }, [trigger, mutate, router]);

  return (
    <AuthContext.Provider
      value={{
        me,
        isLoading,
        isMutating,
        meMutate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// TODO: hooksのuseAuth.tsと重複している。命名検討する（※ファイル名と関数名の違いはある）
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
