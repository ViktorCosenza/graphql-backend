import jwt from 'jsonwebtoken'
import APP_SECRET from '../utils/auth'

const signup = async (root, args, ctx, info) => {
  const { name, email, password } = args
  const user = await ctx.prisma.createUser({ name, email, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return {
    user, token
  }
}

export default { signup }
