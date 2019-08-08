export const UnauthorizedError = message => {
  const error = new Error()
  error.message = message || 'Unauthorized'
  return error
}

export const BadCredentials = message => {
  const error = new Error()
  error.message = message || 'Bad Credentials'
  return error
}