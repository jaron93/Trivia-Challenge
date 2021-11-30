import React from 'react'
import { IProgressBar } from '../../types/types'
import styles from './Counter.module.scss'

interface Props extends IProgressBar {
   currentStyle?: {},
   separatorStyle?: {},
   totalStyle?: {}

}

function Counter({ current, total, currentStyle, separatorStyle, totalStyle }: Props) {
   return (

      <div className={styles.numbers}>

         <span className={styles.current} style={currentStyle}>
            {(current.toString().length < 2) ? "0" + current : current}
         </span>
         <div className={styles.container}>
            <span className={styles.separator} style={separatorStyle}>/</span>
            <span className={styles.total} style={totalStyle}>{total}</span>
         </div>

      </div>

   )
}

export default Counter
