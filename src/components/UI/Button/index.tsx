import React, { memo } from 'react'
import './style.scss'
import { block } from '../../../helpers/bem'
import { IButton } from '../../../types/button'

const b = block('button')

const Button: React.FC<IButton> = ({
  text,
  onClick,
  type = 'button',
  className,
  disabled,
  icon,
}) => {
  return (
    <button
      disabled={ disabled }
      type={ type }
      className={ b({ disabled }).mix(className) }
      onClick={ onClick ? (event) => onClick(event) : undefined }
    >
      {text && text}
      {icon && icon}
    </button>
  )
}

export default memo(Button)