import React from 'react'
import './style.scss'
import { block } from '../../../helpers/bem'

interface IForm {
    children: React.ReactNode;
    className?: string;
    id: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    heading?: string;
}

const b = block('form')

const Form: React.FC<IForm> = ({ children, className , id, onSubmit, heading }) => (
  <div className={ b('container') }>
    {heading && <div className={ b('heading') }>{heading}</div>}
    <form
      id={ id }
      className={ b({}).mix(className) }
      onSubmit={ (event) => onSubmit(event) }
    >
      {children}
    </form>
  </div>
)

export default Form