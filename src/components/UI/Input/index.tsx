import React, { useState, FocusEvent, ChangeEvent } from 'react'
import './style.scss'
import { ERRORS } from '../../../constants/inputs'
import { IInput, INPUTS } from '../../../types/inputs'
import { block } from '../../../helpers/bem'
import ErrorWrapper from '../ErrorWrapper'
import VisibilityCheckbox from '../VisibilityCheckbox'

const b = block('input')

const Input: React.FC<IInput> = ({
  type,
  value,
  onChange,
  defaultValue,
  placeholder,
  error,
  onBlur,
}) => {
  const [ isDirty, setDirty ] = useState(false)
  const [ showPassword, setShowPassword ] = useState(false)
  const isValid = !error && isDirty
  const isNotValid = error && isDirty

  const handlerBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event)
    setDirty(true)
  }

  const changeShowPassword = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation()

    setShowPassword(!showPassword)
  }

  return (
    <ErrorWrapper error={ error && ERRORS[error] }>
      <input
        className={ b({ isValid, isNotValid }) }
        type={ showPassword ? 'text' : type }
        value={ value }
        placeholder={ placeholder }
        onChange={ onChange }
        onBlur={ handlerBlur }
        defaultValue={ defaultValue }
      />
      {type === INPUTS.PASSWORD && (
        <VisibilityCheckbox onChange={ changeShowPassword } checked={ showPassword }/>
      )}
    </ErrorWrapper>
  )
}

export default Input
