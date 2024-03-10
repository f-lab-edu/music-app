import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

import KakaoProvider from 'next-auth/providers/kakao'
const kakaoCustomProvider = KakaoProvider({
  clientId: process.env.KAKAO_ID || '',
  clientSecret: process.env.KAKAO_SECRE || ''
})

const handler = NextAuth({
  providers: [
    kakaoCustomProvider,
    CredentialsProvider({
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: '이메일',
          type: 'text',
          placeholder: '이메일 주소 입력 요망'
        },
        password: { label: '비밀번호', type: 'password' }
      },

      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        })
        const user = await res.json()
        console.log(user)

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  callbacks: {
    async signIn(data) {
      // let name = data.user.name
      console.log(data.user)
      console.log(data.account)
      console.log(data.profile)
      // let userInDb = await prisma.user.findUnique({ where: { name } })
      // console.log(userInDb)

      return true
    }
  }
})

export { handler as GET, handler as POST }
