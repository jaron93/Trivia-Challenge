import React, { useEffect, useState } from 'react'
import styles from './ResultScreen.module.scss'

// Components
import {
   Button,
   FooterLayout,
   HeaderLayout,
   Layout,
   MainLayout,
   Score,
} from '../../components'

//  Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';



function ResultScreen() {


   const { result } = useSelector(state => state.game)
   const [isMobile, setIsMobile] = useState(false)

   const handleResize = () => {
      (window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false))
   }

   useEffect(() => {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize);
   })

   const checkPoints = result.filter((a: { point: boolean }) => (a.point === true)).length

   return (
      <>
         <div className={styles.wrapper}>

            <img className={styles.top_left} alt="" />
            <img className={styles.top_right} alt="" />
            {isMobile &&
               <>
                  <img className={styles.mid_right} alt="" />
                  <img className={styles.mid2_right} alt="" />
               </>
            }
            <img className={styles.bottom_left} alt="" />
            <img className={styles.bottom_right} alt="" />

            <Layout>

               <HeaderLayout>
                  <Score
                     current={checkPoints}
                     total={result.length}
                  />
               </HeaderLayout>

               <MainLayout>


               </MainLayout>

               <FooterLayout>
                  <Button
                     variant="primary"
                  >
                     Play Again
                  </Button>
               </FooterLayout>

            </Layout>
         </div>


      </>
   )
}

export default ResultScreen
