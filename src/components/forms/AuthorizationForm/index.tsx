import React, { useEffect, useState, FC } from 'react'
import Form from '../../UI/Form'
import Input from '../../UI/Input'
import { INPUTS, VALIDATIONS } from '../../../types/inputs'
import Button from '../../UI/Button'
import useInput from '../../../hooks/useInput'

const AuthorizationForm: FC = () => {
  const [ isValid, setValid ] = useState(false)
  const email = useInput('', { [VALIDATIONS.IS_EMPTY]: true, [VALIDATIONS.EMAIL]: true })
  const password = useInput('', {
    [VALIDATIONS.IS_EMPTY]: true,
    [VALIDATIONS.PASSWORD]: true,
    [VALIDATIONS.MAX_LENGTH]: 14,
    [VALIDATIONS.MIN_LENGTH]: 6,
  })

  const handlerSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValid) return

    alert(`email: ${ email.value }, password: ${ password.value }`)
  }

  useEffect(() => {
    if (!password.errors.length && !email.errors.length) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [ password.errors, email.errors ])

  return (
    <Form id="authorization-form" onSubmit={ handlerSubmitForm } heading="Authorization form" >
      <Input
        error={ email.isDirty ? email.errors[0] : undefined }
        value={ email.value }
        onChange={ email.onChange }
        type={ INPUTS.EMAIL }
        placeholder="Email"
        onBlur={ email.onBlur }
      />
      <Input
        error={ password.isDirty ? password.errors[0] : undefined }
        type={ INPUTS.PASSWORD }
        onChange={ password.onChange }
        value={ password.value }
        placeholder="Password"
        onBlur={ password.onBlur }
      />
      <Button disabled={ !isValid } text="authorization" type="submit"/>
    </Form>
  )
}

export default AuthorizationForm