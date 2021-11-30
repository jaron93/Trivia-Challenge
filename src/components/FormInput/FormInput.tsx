import React, { InputHTMLAttributes } from 'react'
import styles from './FormInput.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string;
   ref: string;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(({ name, ...otherProps }, ref) => {
   return (
      <div className={styles.container}>
         <input
            {...otherProps}
            name={name}
            ref={ref}
         />
      </div>
   );
})

export default FormInput