import React, { useState, FocusEvent } from 'react'
import './style.scss'
import { ERRORS } from '../../constants/inputs'
import { IInput } from '../../types/inputs'
import { block } from '../../helpers/bem'

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
  const isValid = !error && isDirty
  const isNotValid = error && isDirty

  const handlerBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event)
    setDirty(true)
  }

  return (
    <div className={ b('box') }>
      {/*<span className={ b('placeholder') }>{placeholder}</span>*/}
      {error && <div className={b('error')}>{ERRORS[error]}</div>}
      <input
        className={ b({ isValid, isNotValid }) }
        type={ type }
        value={ value }
        placeholder={ placeholder }
        onChange={ onChange }
        onBlur={ event => handlerBlur(event) }
        defaultValue={ defaultValue }
      />
    </div>
  )
}

export default Input
