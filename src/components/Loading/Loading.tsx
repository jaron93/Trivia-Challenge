import React from 'react'
import styles from './Loading.module.scss'


function Loading() {
   return (
      <div className={styles.loader}>
         <div className={styles.outer} />
         <div className={styles.middle} />
         <div className={styles.inner} />
      </div>
   )
}

export default Loading
