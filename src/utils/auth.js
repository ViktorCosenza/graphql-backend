import jwt from 'jsonwebtoken'
import { UnauthorizedError } from './errorHandler'
export const APP_SECRET = 'pipi'

export const getUserId = ctx => {
  const Authorization = ctx.request.get('Authorization')
  if (!Authorization) { throw UnauthorizedError() }
  const token = Authorization.replace('Bearer ', '')
  const { userId } = jwt.verify(token, APP_SECRET)
  return userId
}
