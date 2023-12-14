import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest,NextResponse } from 'next/server'
import axios from 'axios';

interface RecaptchaResponse {
    success: boolean;
}

const verifyRecaptcha = async (token: string): Promise<boolean> => {
    const secretKey:string = '6LdUqy4pAAAAAL0Xq20CdFhb7iTZcrv-GsTXU7Ym'; // 替换为你的 reCAPTCHA Secret Key

    const url:string = 'https://www.google.com/recaptcha/api/siteverify';
    const params:object = {
        secret: secretKey,
        response: token,
    };

    try {

        const {data} = await axios.post(url, params);


        return data.success; // 返回验证是否成功的布尔值
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return false;
    }
};


export async function POST(request: NextRequest) {


    const {cs,token} = await request.json();
    console.log(token)


    // 验证 reCAPTCHA token
    const isRecaptchaValid = await verifyRecaptcha(token);

    if (isRecaptchaValid) {
        // 验证成功
        // 执行其他操作

        return Response.json({ success: true, token: token })
    } else {
        // 验证失败
        // 处理错误

        return Response.json({ success: false, token: token })
    }

}
