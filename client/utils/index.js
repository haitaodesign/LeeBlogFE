export const createError = (code, msg) => {
  const error = new Error(msg)
  error.code = code
  return error
}
