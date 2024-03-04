import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import prisma from '@/app/_lib/prisma'
const kakaoCustomProvider = KakaoProvider({
  clientId: process.env.KAKAO_ID || '',
  clientSecret: process.env.KAKAO_SECRE || ''
})

const handler = NextAuth({
  providers: [kakaoCustomProvider],
  callbacks: {
    async signIn(data) {
      let name = data.user.name
      console.log(data.user)
      console.log(data.account)
      console.log(data.profile)
      let userInDb = await prisma.user.findUnique({ where: { name } })
      console.log(userInDb)

      return true
    }
  }
})

export { handler as GET, handler as POST }
