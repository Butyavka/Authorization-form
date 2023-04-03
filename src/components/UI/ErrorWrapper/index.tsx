import React, { FC, ReactNode } from 'react'
import './style.scss'
import { block } from '../../../helpers/bem'

const b = block('error-wrapper')

interface IErrorWrapper {
  error?: string;
  className?: string;
  children: ReactNode;
}

const ErrorWrapper: FC<IErrorWrapper> = ({ error, className, children }) => {
  return (
    <div className={ b({}).mix(className) }>
      {error && <div className={b('error')}>{error}</div>}
      {children}
    </div>
  )
}

export default ErrorWrapper