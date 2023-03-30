import React from 'react'
import './style.scss'
import { block } from '../../helpers/bem'

interface IButton {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled?: boolean;
}

const b = block('button')

const Button: React.FC<IButton> = ({ text, onClick, type = 'button', className, disabled }) => {
  return (
    <button
      disabled={ disabled }
      type={ type }
      className={ b({ disabled }).mix(className) }
      onClick={ onClick ? (event) => onClick(event) : undefined }
    >
      {text}
    </button>
  )
}

export default Button