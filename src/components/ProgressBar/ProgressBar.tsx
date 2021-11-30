import React from "react";
import styles from './ProgressBar.module.scss'
import { IProgressBar } from '../../types/types'
import { Counter } from "..";


const ProgressBar = ({ current, total }: IProgressBar) => {


   return (
      <div className={styles.wrapper}>
         <Counter
            current={current}
            total={total}
         />

         <div className={styles.container}>
            <div className={styles.filler} style={{ width: `${(current * 100) / total}%` }}>
            </div>
         </div>
      </div>
   );
};

export default ProgressBar;