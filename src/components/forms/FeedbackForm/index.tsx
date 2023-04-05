import React from 'react'
import Form from '../../UI/Form'
import useInput from '../../../hooks/useInput'
import { INPUTS, VALIDATIONS } from '../../../types/inputs'
import Input from '../../UI/Input'
import TextArea from '../../UI/TextArea'

const FeedbackForm = () => {
  const email = useInput('', { [VALIDATIONS.IS_EMPTY]: true, [VALIDATIONS.EMAIL]: true })
  const name = useInput('', { [VALIDATIONS.IS_EMPTY]: true })
  const phone = useInput('')
  const comment = useInput('', { [VALIDATIONS.MAX_LENGTH]: 300 })

  return (
    <Form id="feedback-form" onSubmit={ () => console.log('hello')} heading="Shear your feedback">
      <Input
        value={ email.value }
        error={ email.isDirty ? email.errors[0] : undefined }
        type={ INPUTS.EMAIL }
        onChange={ email.onChange }
        placeholder="Email"
        onBlur={ email.onBlur }
      />
      <Input
        value={ name.value }
        error={ name.isDirty ? name.errors[0] : undefined }
        type={ INPUTS.TEXT }
        onChange={ name.onChange }
        placeholder="Name"
        onBlur={ name.onBlur }
      />
      <Input
        value={ phone.value }
        error={ phone.isDirty ? phone.errors[0] : undefined }
        type={ INPUTS.TEXT }
        onChange={ phone.onChange }
        placeholder="Phone"
        onBlur={ phone.onBlur }
      />
      <TextArea
        value={ comment.value }
        onChange={ comment.onChange}
        error={ comment.errors[0] }
        placeholder="You can write comment here"
      />
    </Form>
  )
}

export default FeedbackForm