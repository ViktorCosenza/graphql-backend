import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { APP_SECRET } from '../../utils/auth'
import * as Yup from 'yup'

const signup = {
  validationSchema: Yup.object().shape({
    input: Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email(),
      password: Yup
        .string()
        .strict()
        .trim()
        .min(4)
        .max(32)
    })
  }),
  resolve: async (root, args, ctx, info) => {
    const { input } = args
    const password = await bcrypt.hash(input.password, 10)
    const user = await ctx.prisma.createUser({ ...input, password })
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    return { user, token }
  }
}

export default signup
