import { NextResponse } from "next/server";

import { users } from "@/dummy-db/user";
import { apiDelay } from "@/lib/api";
import { getJwtPayload } from "@/lib/jwt";

export const GET = async () => {
  await apiDelay();
  const jwtPayload = await getJwtPayload();
  const user = users.find((u) => u.id === jwtPayload?.id);

  if (!user) {
    return NextResponse.json(null);
  }

  return NextResponse.json({
    ...user,
    password: undefined,
  });
};
