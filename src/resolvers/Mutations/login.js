import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { APP_SECRET } from '../../utils/auth'
import * as Yup from 'yup'

const login = {
  validationSchema: Yup.object().shape({
    input: Yup.object().shape({
      email: Yup.string()
        .email(),
      password: Yup.string()
        .strict()
        .trim()
        .min(4)
        .max(32)
    })
  }),
  resolve: async (root, args, ctx, info) => {
    const { input } = args
    const user = await ctx.prisma.user({ email: input.email })
    if (!user) throw new Error('User not Found')

    const valid = await bcrypt.compare(input.password, user.password)
    if (!valid) throw new Error('Wrong Password')

    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    return { user, token }
  }
}

export default login
