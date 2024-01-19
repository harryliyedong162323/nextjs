import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'


export async function GET(request: NextRequest) {

  const path = request.nextUrl.searchParams.get('path')

  // revalidatePath('/[locale]/[...slug]', 'page')

  // console.log(path)
  // console.log(revalidatePath('/en-GB/home', 'page'))
  // return Response.json({ revalidated: true, now: Date.now() })

// ?path=/[locale]/[...slug]
  //revalidatePath(path, 'page')

  // ?path=/en-GB/home
  // revalidateTag(path)
  //
  // console.log('revalidateTag', path)
  console.log(path);
  if (path) {
    revalidatePath(path)
    return Response.json({ revalidated: true, now: Date.now() })
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  })


}
