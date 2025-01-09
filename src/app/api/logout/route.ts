import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const cookiesStore = cookies();
  console.log("INSIDE_API_CALl");
  cookiesStore.delete("token");

  return NextResponse.redirect(process.env.NEXT_PUBLIC_URL as string);
}
