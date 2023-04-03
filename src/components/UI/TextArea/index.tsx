import React, { FC, ChangeEvent } from 'react'
import './style.scss'
import ErrorWrapper from '../ErrorWrapper'

interface ITextArea {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

const TextArea: FC<ITextArea> = ({ value, onChange, placeholder, className, error }) => (
  <ErrorWrapper error={ error && error }>
    <textarea
      value={ value }
      onChange={ onChange }
      placeholder={ placeholder }
      className={ className ? className + ' textarea' : 'textarea' }
    />
  </ErrorWrapper>
)

export default TextArea