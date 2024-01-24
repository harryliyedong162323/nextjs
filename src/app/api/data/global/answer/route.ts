import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from 'next/server'
import {object} from "prop-types";




export async function POST(request: NextRequest) {

    const {answer,user,type} = await request.json();


    if(type == 'update'){

        try {
            let {rows} = await sql`UPDATE INTO "public"."email_sg" ("email_address") VALUES ('2222222');`;

            return Response.json({ success: true, status: 200,data:rows })


        } catch (error) {

            return Response.json({ success: false, token: 500,data:error })
        }


    }else if (type == 'add'){


        try {
            let {rows} = await sql`INSERT INTO "public"."email_sg" ("email_address") VALUES ('2222222');`;

            return Response.json({ success: true, status: 200,data:rows })


        } catch (error) {

            return Response.json({ success: false, token: 500,data:error })
        }
    }








}