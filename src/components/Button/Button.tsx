import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   children: React.ReactNode;
   className?: string,
   loading?: boolean;
   icon?: string;
   variant?: "primary" | "secondary" | "third";
};

const Button: React.FC<ButtonProps> = ({
   children,
   variant,
   icon,
   loading,
   ...rest
}) => {

   return (
      <button className={classNames(styles.button, styles[`${variant}`])} disabled={loading} {...rest}>
         {icon &&
            <div className={styles.icon}>
               <img className={styles.icon} src={icon} alt="" />
            </div>}
         <span className={styles.text}>{loading ? <h3>Loading</h3> : children}</span>
      </button>
   )
}


export default Button;
