import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL("/home", request.url));

  const cookiesStore = cookies();

  const token = cookiesStore.get("token");
  // console.log(token?.value, "tokentoken");

  request.headers.set("token", token?.value as string);

  // console.log(request.headers, "REQUEST_HEREEEE");
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
