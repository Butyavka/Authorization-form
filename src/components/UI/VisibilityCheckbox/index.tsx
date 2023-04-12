import React, { ChangeEvent, FC, useMemo } from 'react'
import './style.scss'
import { ReactComponent as Visibility } from '../../../assets/icon/visibility-fill.svg'
import { ReactComponent as Invisibility } from '../../../assets/icon/invisibility-fill.svg'
import { block } from '../../../helpers/bem'
import createID from '../../../helpers/createID'

const b = block('visibility-checkbox')

interface IVisibilityCheckbox {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  checked: boolean;
}

const VisibilityCheckbox: FC<IVisibilityCheckbox> = ({ onChange, checked, className }) => {
  const id = useMemo(() => createID(), [])

  return (
    <div className={ b('wrapper').mix(className) }>
      <input
        id={ id }
        type="checkbox"
        className={ b() }
        onChange={ onChange }
      />
      <label htmlFor={ id } className={ b('label') }>
        { checked
          ? <Invisibility className={ b('icon') }/>
          : <Visibility className={ b('icon') }/>
        }
      </label>
    </div>
  )
}

export default VisibilityCheckbox