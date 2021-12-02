import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
   children: React.ReactNode;
   className?: string,
   loading?: boolean;
   icon?: React.SVGProps<SVGSVGElement>;
   variant?: "primary" | "secondary" | "third";
};

function Button({ children, variant, icon, loading, ...rest }: Props) {

   return (

      <button className={classNames(styles.button, styles[`${variant}`])} disabled={loading} {...rest}>

         {icon &&
            <div className={styles.icon}>
               {icon}
            </div>}
         <span className={styles.text}>{loading ? <h3>Loading</h3> : children}</span>

      </button>

   )
}


export default Button;
