import { sql,QueryResultRow, QueryResult  } from "@vercel/postgres";
import { NextRequest,NextResponse } from 'next/server'

import {formatDateTime} from '@/utils/common'

interface answerContent{
    q1:string,
    q2:string,
    q3:{
        a1:string,
        a2:string,
    },
    q4:string,
    q5:string,
}

interface userContent{
    emailName:string,
    emailAddress:string,
    locale:string,
}


interface requestContent{
    answer?:answerContent | '',
    user:userContent,
    id:string,
    type:string,
}


const insertLocaleQuery = (answers:answerContent,user:userContent,time:string,id:string,locale:string) =>{
    let res = null;
    switch (locale){
        case 'en':
            res = sql`INSERT INTO public.quiz_record_en (unique_id, q1, q2, q3_first, q3_second, q4, q5) VALUES (${id}, ${answers.q1}, ${answers.q2}, ${answers.q3.a1}, ${answers.q3.a2}, ${answers.q4}, ${answers.q5}) RETURNING *`;
            break;
        case 'en-GB':
            res = sql`INSERT INTO public.quiz_record_en_bg (unique_id, q1, q2, q3_first, q3_second, q4, q5) VALUES (${id}, ${answers.q1}, ${answers.q2}, ${answers.q3.a1}, ${answers.q3.a2}, ${answers.q4}, ${answers.q5}) RETURNING *`;
            break;
        case 'en-SG':
            res = sql`INSERT INTO public.quiz_record_en_sg (unique_id, q1, q2, q3_first, q3_second, q4, q5) VALUES (${id}, ${answers.q1}, ${answers.q2}, ${answers.q3.a1}, ${answers.q3.a2}, ${answers.q4}, ${answers.q5}) RETURNING *`;
            break;
        case 'ko-KR':
            res = sql`INSERT INTO public.quiz_record_ko_kr (unique_id, q1, q2, q3_first, q3_second, q4, q5) VALUES (${id}, ${answers.q1}, ${answers.q2}, ${answers.q3.a1}, ${answers.q3.a2}, ${answers.q4}, ${answers.q5}) RETURNING *`;
            break;
        case 'zh-Hant-TW':
            res = sql`INSERT INTO public.quiz_record_zh_hant_tw (unique_id, q1, q2, q3_first, q3_second, q4, q5) VALUES (${id}, ${answers.q1}, ${answers.q2}, ${answers.q3.a1}, ${answers.q3.a2}, ${answers.q4}, ${answers.q5}) RETURNING *`;
            break;
        case 'zh-CN':
            res = sql`INSERT INTO public.quiz_record_zh_cn (unique_id, q1, q2, q3_first, q3_second, q4, q5) VALUES (${id}, ${answers.q1}, ${answers.q2}, ${answers.q3.a1}, ${answers.q3.a2}, ${answers.q4}, ${answers.q5}) RETURNING *`;
            break;
        default:
            break;
    }

    return res;
}

const updateLocaleQuery = (answers:answerContent,user:userContent,time:string,id:string,locale:string) =>{
    let res = null;
    switch (locale){
        case 'en':
            res = sql`UPDATE public.quiz_record_en SET name=${user.emailName}, email_address=${user.emailAddress} ,updated_at = ${time} WHERE unique_id = ${id}`;
            break;
        case 'en-GB':
            res = sql`UPDATE public.quiz_record_en-gb SET name=${user.emailName}, email_address=${user.emailAddress} ,updated_at = ${time} WHERE unique_id = ${id}`;
            break;
        case 'en-SG':
            res = sql`UPDATE public.quiz_record_en_sg SET name=${user.emailName}, email_address=${user.emailAddress} ,updated_at = ${time} WHERE unique_id = ${id}`;
            break;
        case 'ko-KR':
            res = sql`UPDATE public.quiz_record_ko_kr SET name=${user.emailName}, email_address=${user.emailAddress} ,updated_at = ${time} WHERE unique_id = ${id}`;
            break;
        case 'zh-Hant-TW':
            res = sql`UPDATE public.quiz_record_zh_hant_tw SET name=${user.emailName}, email_address=${user.emailAddress} ,updated_at = ${time} WHERE unique_id = ${id}`;
            break;
        case 'zh-CN':
            res = sql`UPDATE public.quiz_record_zh_cn SET name=${user.emailName}, email_address=${user.emailAddress} ,updated_at = ${time} WHERE unique_id = ${id}`;
            break;
        default:
            break;
    }

    return res;
}



export async function POST(request: NextRequest) {


    const time:string = formatDateTime(new Date());

    const {answers,user,type,id,locale} : {
        answers:answerContent,
        user:userContent,
        type:string,
        id:string,
        locale:string,
    } = await request.json();

    // const {q1,q2,q3,q4,q5} : answerContent = answers;
    //
    // const {emailName,emailAddress} : userContent = user;



    if(type == 'update'){

        try {

            let query = updateLocaleQuery(answers,user,time,id,locale);

            let res:QueryResult<QueryResultRow> | null= await query;

            return Response.json({ success: true, code: 200,data:res?.rows })


        } catch (error) {

            return Response.json({ success: false, code: 500,data:error })
        }


    }else if (type == 'add'){

        try {
              let query = insertLocaleQuery(answers,user,time,id,locale);
              let res:QueryResult<QueryResultRow> | null= await query;

            return Response.json({ success: true, status: 200,data:res?.rows })


        } catch (error) {

            return Response.json({ success: false, code: 500,data:error })
        }
    }else{
        return Response.json({ success: false, code: 500,data:'type error' })
    }








}