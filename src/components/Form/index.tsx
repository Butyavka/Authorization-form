import React from 'react'
import './style.scss'

interface IForm {
    children: React.ReactNode;
    className?: string;
    id: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IForm> = ({ children, className , id, onSubmit }) => (
  <form
    id={ id }
    className={ className ? className + ' form' : 'form' }
    onSubmit={ (event) => onSubmit(event) }
  >
    {children}
  </form>
)

export default Form