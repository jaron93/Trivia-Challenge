import React, { InputHTMLAttributes } from 'react'
import styles from './FormInput.module.scss';

import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string;
   error?: boolean
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(({ name, error, ...otherProps }, ref) => {

   return (
      <div className={styles.container}>
         <input
            className={classNames(styles.input, error && styles.isError)}
            {...otherProps}
            name={name}
            ref={ref}
         />
      </div>
   );
})

export default FormInput