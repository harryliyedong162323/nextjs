import {NextRequest, NextResponse} from "next/server";
import signature from "@/utils/signature";
export async function middleware(request: NextRequest,response:NextResponse) {
  // const { pathname, search } = request.nextUrl;
  const responseError = Response.json({ success: false, code: 500,data:"signature error" });
  const responseNext = NextResponse.next();
  try {
    const postData:NextRequest = await request.json();
    const headerData:string | null = request.headers.get('_sign');
    const sign:string = signature(postData);
    if(sign === headerData){
      return responseNext;
    }else{
      return responseError
    }
  }catch (err){
    return responseError
  }
}

export const config = {
  // ? Negate any route that contains a dot, or starts with: api, _next, preview, or age-gate
  // ? Can't be stored as variable because of nextjs parsing reasons
  // matcher: ['/((?!.*\\.)(?!api|_next|preview|age-gate).*)'],
  matcher: '/api/:path*',
};
