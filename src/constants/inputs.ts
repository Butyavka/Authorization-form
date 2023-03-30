import { VALIDATIONS } from '../types/inputs'

const ERRORS: {[index: string]: string} = {
  [VALIDATIONS.MIN_LENGTH]: 'This string is too shot',
  [VALIDATIONS.MAX_LENGTH]: 'This string is too long',
  [VALIDATIONS.IS_EMPTY]: 'Field shouldn`t be empty',
  [VALIDATIONS.PASSWORD]: 'Password doesn`t valid',
  [VALIDATIONS.EMAIL]: 'Email doesn`t valid',
}

export {
  ERRORS,
}