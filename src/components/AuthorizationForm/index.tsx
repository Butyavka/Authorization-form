import React, { useEffect, useState, FC } from 'react'
import Form from '../../components/Form'
import './style.scss'
import Input from '../../components/Input'
import { INPUTS, VALIDATIONS } from '../../types/inputs'
import { block } from '../../helpers/bem'
import Button from '../../components/Button'
import useInput from '../../hooks/useInput'

const b = block('registration')

interface IAuthorizationForm {
  header?: string;
}

const AuthorizationForm: FC<IAuthorizationForm> = ({ header }) => {
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
    <div className={ b('container').mix('container') }>
      {header && <div className="header" >{header}</div>}
      <Form id="authorization-form" onSubmit={ handlerSubmitForm }>
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
        <Button disabled={ !isValid } text="authorization" type="submit" className={ b('button') }/>
      </Form>
    </div>
  )
}

export default AuthorizationForm