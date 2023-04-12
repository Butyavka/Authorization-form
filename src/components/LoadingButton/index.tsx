import React, { FC } from 'react'
import './style.scss'
import { ILoadingButton } from '../../types/button'
import Button from '../UI/Button'
import Loading from '../UI/Loading'

const LoadingButton: FC<ILoadingButton> = (props) => (
  <Button
    { ...props }
    icon={ props.loading && <Loading size={ props?.size || 14 }/> }
    disabled={ props.disabled || props.loading }
    className={ props.className + ' button--loading' }
  />
)

export default LoadingButton