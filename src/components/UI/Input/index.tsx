import React, { useState, FocusEvent, MouseEvent } from 'react'
import './style.scss'
import { ERRORS } from '../../../constants/inputs'
import { IInput, INPUTS } from '../../../types/inputs'
import { block } from '../../../helpers/bem'
import Button from '../Button'
import { ReactComponent as Visibility } from '../../../assets/icon/visibility-fill.svg'
import { ReactComponent as Invisibility } from '../../../assets/icon/invisibility-fill.svg'
import ErrorWrapper from '../ErrorWrapper'

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

  const changeShowPassword = (event: MouseEvent<HTMLButtonElement>) => {
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
        <Button
          onClick={ changeShowPassword }
          className={ b('button') }
          icon={ showPassword ? <Visibility/> : <Invisibility/> }
        />
      )}
    </ErrorWrapper>
  )
}

export default Input
