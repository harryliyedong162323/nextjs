import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from 'next/server'




export async function GET(request: NextRequest) {

    const {answer} = await request.json();



    try {
//         const result = await sql`INSERT INTO "public"."email_sg" ("email_address")
// VALUES ('2222222');`;


        const {rows} = await sql`SELECT * FROM public.email_sg
ORDER BY id`

        return Response.json({ success: true, status: 200,data:rows })


    } catch (error) {

        return Response.json({ success: false, token: 500,data:error })
    }





}