

import { NextResponse } from "next/server";

export function middleware(request) {
  // Debugging the exact pathname
  const dummyUserData = {
    role: "admin", 
    email: "test@admin.com"
  }
  let isServicesPage = request.nextUrl.pathname.startsWith('/services')
  console.log("Checking if it starts with '/services============':", isServicesPage);

  return NextResponse.next();
}
