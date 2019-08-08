export const UnauthorizedError = message => {
  const error = new Error()
  error.message = message || 'Unauthorized'
  return error
}
