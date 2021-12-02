import React, { ButtonHTMLAttributes } from 'react'
import styles from './CloseButton.module.scss'
import { ReactComponent as CloseIcon } from '../../assets/Icons/close_icon.svg'
import classNames from 'classnames';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
   variant?: "primary" | "secondary"
}

function CloseButton({ variant = "primary", ...rest }: Props) {
   return (
      <button className={styles.element} {...rest}>
         <CloseIcon className={classNames(styles.closeSVG, styles[`${variant}`])} />
      </button>
   )
}

export default CloseButton

