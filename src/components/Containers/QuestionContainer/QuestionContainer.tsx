import React from 'react'
import styles from './QuestionContainer.module.scss'

import classNames from 'classnames'

/* SVG's */
import checkMark_icon from '../../../assets/Icons/checkMark_icon.svg'
import crossMark_icon from '../../../assets/Icons/crossMark_icon.svg'

/* Type */
import { IResult } from '../../../types/types';

type Props = {
   result: IResult
}

const QuestionContainer = React.forwardRef<HTMLDivElement, Props>(({ result }, ref) => {

   /* Avoid decoding problem */
   const renderHTML = (rawHTML: string) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML }, className: `${styles.question}` });

   return (

      <div className={classNames(styles.element, !result.point && styles.isFalse)} ref={ref}>

         <span className={styles.question}>
            {renderHTML(result.question)}
         </span>

         {result.point ?
            <img className={styles.icon} src={checkMark_icon} alt="" />
            :
            <img className={styles.icon} src={crossMark_icon} alt="" />
         }

      </div>

   );
})

export default QuestionContainer
