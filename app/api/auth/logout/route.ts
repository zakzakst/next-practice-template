import { NextResponse } from "next/server";

import { apiDelay } from "@/lib/api";

export const POST = async () => {
  await apiDelay();

  const response = NextResponse.json({
    message: "ログアウト成功",
  });

  response.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  return response;
};
