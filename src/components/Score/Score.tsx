import React from 'react'
import styles from './Score.module.scss'

import avatar_icon from '../../assets/Icons/avatar_icon.svg'
import { Counter } from '..'


type Props = {
   current: number;
   total: number;
}

function Score({ current, total }: Props) {

   const rating = (current / total) * 10

   /* Always render 10 colored stars depends on rating number - max 10,
   If exceeds the set value I recomend to compute the mean value like in variable above.
   I can rebuild this component and provide more feauters but for this project I don't see the point */
   const renderStars = (rating: number) => {

      let stars = []

      for (let i = 0; i < 10; i++) {

         let attrs: any = {};
         attrs['fill'] = (i + 1 <= rating) ? '#FF7C7C' : '#969CDC';

         stars.push(
            <svg key={`star-${i}`} width="22" height="20" viewBox="0 0 22 20" fill="none">
               <path
                  {...attrs}
                  d="M11 0L14.5044 6.17664L21.4616 7.60081L16.6702 12.8424L17.4656 19.8992L11 16.962L4.53436 19.8992L5.3298 12.8424L0.538379 7.60081L7.49562 6.17664L11 0Z"
               />
            </svg>
         );

      }
      return stars
   }


   return (
      <>
         <div className={styles.score}>

            <img className={styles.avatar} src={avatar_icon} alt="Avatar"></img>
            <span className={styles.title}>You scored</span>
            <Counter
               current={current}
               total={total}
               separatorStyle={{ color: 'white' }}
               totalStyle={{ color: 'white' }}
            />

         </div>

         <div className={styles.stars}>
            {renderStars(rating)}
         </div>

      </>
   )
}

export default Score
