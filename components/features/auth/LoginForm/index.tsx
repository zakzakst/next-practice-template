"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useAuthLogin } from "@/hooks/useAuth";
import { toast } from "sonner";

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
      toast("ログインしました");
      router.push("/");
    } else {
      toast("ログインに失敗しました");
    }
  };

  return (
    <div className="w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>ログインフォーム</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-[max-content_1fr] gap-2">
            <Label className="col-span-2 grid grid-cols-subgrid">
              <span>メールアドレス</span>
              <Input />
            </Label>
            <Label className="col-span-2 grid grid-cols-subgrid">
              <span>パスワード</span>
              <Input type="password" />
            </Label>
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2">
          <Button onClick={handleSubmit} disabled={isMutating}>
            ログイン
          </Button>
          <Button variant="outline" asChild>
            <Link href="/register">ユーザー登録</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
