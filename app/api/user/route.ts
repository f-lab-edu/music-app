import prisma from '@/app/_lib/prisma'
import * as bcrypt from 'bcrypt'
interface RequestBody {
  name: string
  email: string
  password: string
  position: string
}

//sign up api
export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10), // bcrypt.hash를 이용해서 password를 암호화해서 저장
      position: body.position
    }
  })

  const { password, ...result } = user
  return new Response(JSON.stringify(result))
}
