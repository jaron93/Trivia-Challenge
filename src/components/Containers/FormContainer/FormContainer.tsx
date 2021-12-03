import React from 'react'
import styles from './FormContainer.module.scss'

type Props = {
   children: React.ReactNode,
   title: string,
   icon: React.SVGProps<SVGSVGElement>
}

function FormContainer({ title, icon, children }: Props) {

   return (
      <div className={styles.element}>

         <div className={styles.title}>
            {icon}
            <span className={styles.title}>{title}</span>
         </div>

         {children}

      </div>
   )
}

export default FormContainer
