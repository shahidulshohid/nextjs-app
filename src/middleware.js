import { NextResponse } from "next/server";

export function middleware(request) {
    let currentCookies = request.cookies.get('nextjs-token')
    console.log(currentCookies.value)
  // Debugging the exact pathname
  const dummyUserData = {
    role: "user",
    email: "test@admin.com",
  };

  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData.role === "admin";
  if (isServicesPage && !isAdmin) {
    //ata login page niye jay and url o change hoye login hoy==
    return NextResponse.redirect(new URL("/login", request.url));

    // ata login page niye jay but url change hoy na ===
    // return NextResponse.rewrite(new URL('/login', request.url))
  }
  console.log(
    "Checking if it starts with '/services============':",
    isServicesPage
  );

  return NextResponse.next();
}
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
