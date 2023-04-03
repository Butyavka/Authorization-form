import { ChangeEvent, useState } from 'react'
import useValidation from './useValidation'
import { Validations } from '../types/inputs'

export default (initialValue: string, validations: Validations = {}) => {
  const [ value, setValue ] = useState(initialValue)
  const [ isDirty, setDirty ] = useState(false)
  const validate = useValidation(value, validations)
  const errors = isDirty ? Object.keys(validate).filter(item => validate[item as keyof boolean]) : []

  const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  const onBlur = () => setDirty(true)

  return {
    value,
    onChange,
    onBlur,
    errors,
    isDirty,
  }
}