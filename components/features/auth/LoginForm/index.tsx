"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useAuthLogin } from "@/hooks/useAuth";

export const LoginForm = () => {
  const router = useRouter();
  const { trigger, isMutating } = useAuthLogin();
  const { meMutate } = useAuth();

  const handleSubmit = async () => {
    if (isMutating) return;
    const res = await trigger({
      email: "taro@example.com",
      password: "password123",
    });
    if (res.ok) {
      await meMutate();
      router.push("/");
    } else {
      alert("ログインに失敗しました");
    }
  };

  return (
    <div>
      LoginForm
      <p>
        <Button onClick={handleSubmit} disabled={isMutating}>
          test
        </Button>
      </p>
    </div>
  );
};
