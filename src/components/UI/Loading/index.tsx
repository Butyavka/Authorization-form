import React, { FC } from 'react'
import './style.scss'
import { ReactComponent as LoadingIcon } from '../../../assets/icon/loading.svg'

interface ILoading {
  size?: number
}

const Loading: FC<ILoading> = ({ size = 20 }) => (
  <LoadingIcon style={{ width: size, height: size }} className="loading"/>
)

export default Loading