const emailRegexp = /^\S+@\S+\.\S+$/
// eslint-disable-next-line max-len
const passwordRegexp = /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/

const REGEXPS = {
  EMAIL: emailRegexp,
  PASSWORD: passwordRegexp,
}

export {
  REGEXPS,
}