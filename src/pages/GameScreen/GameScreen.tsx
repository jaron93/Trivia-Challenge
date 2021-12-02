import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import styles from './GameScreen.module.scss'

import { useDispatch, useSelector } from 'react-redux';
import { clearGameState, setResult } from '../../store/slices/game';

// Components
import {
   CloseButton,
   Button,
   FooterLayout,
   HeaderLayout,
   Layout,
   Loading,
   MainLayout,
   ProgressBar
} from '../../components'
import { clearPreferencesState } from '../../store/slices/preferences';

function GameScreen() {

   const navigate = useNavigate();
   const dispatch = useDispatch()

   const { difficulty, amount } = useSelector(state => state.preferences)
   const { questions, status, result }: any = useSelector(state => state.game)

   const [currentQuestion, setCurrentQuestion] = useState(0);


   const handleAnswerOptionClick = (answerOption: boolean) => {

      /* Api provide answer as string */
      const checkIfAnswerIsCorrect = (questions[currentQuestion].correct_answer.toLowerCase() === 'true') === answerOption

      /* Create Array with new object contains only question and if answer is correct */
      dispatch(setResult([...result, {
         question: questions[currentQuestion].question,
         point: checkIfAnswerIsCorrect
      }]))

      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questions.length) {
         setCurrentQuestion(nextQuestion);
      } else {
         navigate('/result')
      }
   };

   const handleOnClickClose = () => {
      dispatch(clearGameState())
      dispatch(clearPreferencesState())
      navigate('/')
   }


   /* Prevent for activate this route without choosing the game options. */
   useEffect(() => {
      if ((difficulty && amount) === null) navigate('/')
   }, [amount, navigate, difficulty])

   const [isMobile, setIsMobile] = useState(true)

   const handleResize = () => {
      (window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false))
   }

   useEffect(() => {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize);
   })

   /* This way I got around the api decoding problem
   I could change the api encoding to e.g. Base64 and decode later, but this way is more transparent */
   const renderHTML = (rawHTML: string) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML }, className: `${styles.question}` });

   return (
      <div className={styles.wrapper}>

         <img className={styles.top_left} alt="" />
         <img className={styles.top_right} alt="" />
         {isMobile &&
            <img className={styles.mid_right} alt="" />
         }
         <img className={styles.bottom_left} alt="" />
         <img className={styles.bottom_right} alt="" />

         <Layout>
            {status === "loading" ?
               <Loading />
               :
               <>
                  {questions[currentQuestion] &&
                     <>

                        <HeaderLayout>

                           <div className={styles.headerContainer}>

                              <span className={styles.category}>
                                 {questions[currentQuestion].category}
                              </span>

                              <span className={styles.level}>level: {difficulty}</span>

                           </div>

                           <ProgressBar
                              //Array Index start from 0 
                              current={currentQuestion + 1}
                              total={questions.length}
                           />

                           <CloseButton
                              onClick={handleOnClickClose}
                              variant="secondary"
                           />

                        </HeaderLayout>

                        <MainLayout>
                           <div className={styles.mainContainer}>
                              {renderHTML(questions[currentQuestion].question)}
                           </div>
                        </MainLayout>

                        <FooterLayout>
                           <Button
                              variant="secondary"
                              onClick={() => handleAnswerOptionClick(true)}
                           >
                              True
                           </Button>
                           <Button
                              variant="third"
                              onClick={() => handleAnswerOptionClick(false)}
                           >
                              False
                           </Button>
                        </FooterLayout>
                     </>
                  }
               </>
            }
         </Layout>
      </div>
   )
}

export default GameScreen
