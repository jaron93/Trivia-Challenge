import { useEffect } from 'react'

// Styles, Animation
import styles from './ResultScreen.module.scss'

// Types
import { IResult } from '../../types/types';

// Components
import {
   Button,
   CloseButton,
   FooterLayout,
   HeaderLayout,
   Layout,
   Score,
   QuestionContainer,
   AnimatedPage
} from '../../components'

//  Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { clearGameState, fetchQuestions } from '../../store/slices/game';
import { clearPreferencesState } from '../../store/slices/preferences';

// Hooks
import useWindowDimensions from '../../hooks/useWindowDimension';


function ResultScreen() {

   const navigate = useNavigate();
   const dispatch = useDispatch()

   const { width } = useWindowDimensions();
   const { result } = useSelector(state => state.game)
   const { difficulty, amount } = useSelector(state => state.preferences)

   /* Prevent for activate this route without choosing the game options. */
   useEffect(() => {
      if ((difficulty && amount) === null) navigate('/')
   }, [amount, navigate, difficulty])


   const checkPoints = result.filter((a: { point: boolean }) => (a.point === true)).length

   const handleOnClick = () => {
      dispatch(clearGameState())
      dispatch(fetchQuestions({ difficulty, amount }))
      navigate('/game')
   }

   const handleOnClickClose = () => {
      dispatch(clearGameState())
      dispatch(clearPreferencesState())
      navigate('/')
   }

   return (
      <AnimatedPage>

         <div className={styles.wrapper}>

            <img className={styles.top_left} alt="DecoShape" />
            <img className={styles.top_right} alt="DecoShape" />
            {(width < 768) &&
               <>
                  <img className={styles.mid_right} alt="DecoShape" />
                  <img className={styles.mid2_right} alt="DecoShape" />
               </>
            }
            <img className={styles.bottom_left} alt="DecoShape" />
            <img className={styles.bottom_right} alt="DecoShape" />

            <Layout>

               <HeaderLayout>
                  <Score
                     current={checkPoints}
                     total={result.length}
                  />

                  <CloseButton
                     onClick={handleOnClickClose}
                  />
               </HeaderLayout>


               <main className={styles.mainContainer}>

                  {result.map((result: IResult, index) =>
                     <QuestionContainer
                        result={result}
                        key={index}
                     />
                  )}

               </main>

               <FooterLayout>
                  <Button
                     variant="primary"
                     onClick={handleOnClick}
                  >
                     Play Again
                  </Button>
               </FooterLayout>

            </Layout>
         </div >

      </AnimatedPage>
   )
}

export default ResultScreen
