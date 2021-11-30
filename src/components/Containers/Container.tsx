import React from 'react'
import styles from './Container.module.scss'

function Container({ children }: any) {
   return (
      <div className={styles.element}>
         {children}
      </ div>
   )
}

export default Container
