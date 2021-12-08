import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
   children: React.ReactNode;
   className?: string,
   loading?: boolean;
   variant?: "primary" | "secondary" | "third";
};

function Button({ children, variant, loading, ...rest }: Props) {

   return (

      <button className={classNames(styles.button, styles[`${variant}`])} disabled={loading} {...rest}>

         <span className={styles.text}>{loading ? <h3>Loading</h3> : children}</span>

      </button>

   )
}


export default Button;
