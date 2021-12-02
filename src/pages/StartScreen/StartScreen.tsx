import React from 'react'
import styles from './StartScreen.module.scss'

//  Containers
import FormContainer from '../../components/Containers/FormContainer/FormContainer'

// SVG's *
import logo from '../../assets/logo.svg'
import difficulty_icon from '../../assets/Icons/difficulty_icon.svg'
import amount_icon from '../../assets/Icons/amount_icon.svg'
import play_icon from '../../assets/Icons/play_icon.svg'

// Components
import {
   Button,
   FooterLayout,
   HeaderLayout,
   FormInput,
   Layout,
   MainLayout,
   Select
} from '../../components'

//  Redux
import { setAmount, setDifficulty } from '../../store/slices/preferences'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../../store/slices/game'

// Options for Select component
const options = ["hard", "medium", "easy"]

function StartScreen() {

   const dispatch = useDispatch()
   const navigate = useNavigate();

   const { difficulty, amount } = useSelector(state => state.preferences)

   // Handle Play game button
   const handleOnClick = () => {
      if ((difficulty && amount) === null) return alert
      if (amount <= 0) return alert
      navigate('/game')
      dispatch(fetchQuestions({ difficulty, amount }))
   }

   // Handle Amount input
   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setAmount(parseFloat(e.target.value)))
   }

   return (
      <>
         <div className={styles.wrapper}>

            <img className={styles.top_left} alt="" />
            <img className={styles.top_right} alt="" />
            <img className={styles.bottom_left} alt="" />
            <img className={styles.bottom_right} alt="" />

            <Layout>

               <HeaderLayout>
                  <span className={styles.title}>Welcome to the</span>
                  <img className={styles.logo} src={logo} alt="TRIVIA" />
               </HeaderLayout>

               <MainLayout>

                  <FormContainer icon={difficulty_icon} title="Difficulty">
                     <Select
                        options={options}
                        onSelect={setDifficulty}
                     />
                  </FormContainer>

                  <FormContainer icon={amount_icon} title="Amount">
                     <FormInput
                        name="amount"
                        type="text"
                        onChange={handleOnChange}
                     />
                  </FormContainer>


               </MainLayout>

               <FooterLayout>
                  <Button
                     variant="primary"
                     icon={play_icon}
                     onClick={handleOnClick}
                  >
                     Play Game
                  </Button>
               </FooterLayout>

            </Layout>
         </div>


      </>
   )
}

export default StartScreen
