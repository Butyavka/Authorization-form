import { useEffect, useState } from 'react'
import { VALIDATIONS, Validations } from '../types/inputs'
import { REGEXPS } from '../constants/regexps'

export default (value: string, validations: Validations) => {
  const [ isEmpty, setEmpty ] = useState(false)
  const [ minLength, setMinLength ] = useState(false)
  const [ maxLength, setMaxLength ] = useState(false)
  const [ email, setEmail ] = useState(false)
  const [ password, setPassword ] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case VALIDATIONS.IS_EMPTY:
          value ? setEmpty(false) : setEmpty(true)
          break

        case VALIDATIONS.MIN_LENGTH:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          value.length < validations[validation] ? setMinLength(true) : setMinLength(false)
          break

        case VALIDATIONS.MAX_LENGTH:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          value.length > validations[validation] ? setMaxLength(true) : setMaxLength(false)
          break

        case VALIDATIONS.EMAIL:
          REGEXPS.EMAIL.test(value) ? setEmail(false) : setEmail(true)
          break

        case VALIDATIONS.PASSWORD:
          REGEXPS.PASSWORD.test(value) ? setPassword(false) : setPassword(true)
          break
      }
    }
  }, [ value ])

  return {
    isEmpty,
    minLength,
    maxLength,
    password,
    email,
  }
}