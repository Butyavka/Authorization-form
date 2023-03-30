import { ChangeEvent, FocusEvent } from 'react'

enum INPUTS {
    EMAIL = 'EMAIL',
    PASSWORD = 'PASSWORD'
}

type InputType = INPUTS.EMAIL | INPUTS.PASSWORD

enum VALIDATIONS {
    IS_EMPTY = 'isEmpty',
    MIN_LENGTH = 'minLength',
    MAX_LENGTH = 'maxLength',
    EMAIL = 'email',
    PASSWORD = 'password',
}

interface IInput {
  type: InputType;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  placeholder: string;
  error?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

interface Validations {
    [VALIDATIONS.IS_EMPTY]?: boolean;
    [VALIDATIONS.EMAIL]?: boolean;
    [VALIDATIONS.PASSWORD]?: boolean;
    [VALIDATIONS.MAX_LENGTH]?: number;
    [VALIDATIONS.MIN_LENGTH]?: number;
}

export {
  INPUTS,
  VALIDATIONS,
}

export type {
  IInput,
  Validations,
}
