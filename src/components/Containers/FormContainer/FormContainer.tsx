import React from 'react'
import styles from './FormContainer.module.scss'

type FormContainerProps = {
   title: string,
   icon: string,
   children: any | null;
}

function FormContainer({ title, icon, children }: FormContainerProps) {

   return (
      <div className={styles.element}>

         <div className={styles.title}>
            <img src={icon} alt="Icon" />
            <span>{title}</span>
         </div>

         {children}

      </div>
   )
}

export default FormContainer
