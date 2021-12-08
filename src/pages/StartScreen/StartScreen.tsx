import React, { useState } from 'react'
import styles from './StartScreen.module.scss'

//  Containers
import FormContainer from '../../components/Containers/FormContainer/FormContainer'

// SVG's 
import logo from '../../assets/logo.svg'
import { ReactComponent as DifficultyIcon } from '../../assets/Icons/difficulty_icon.svg'
import { ReactComponent as AmountIcon } from '../../assets/Icons/amount_icon.svg'
import { ReactComponent as StarIcon } from '../../assets/Icons/star.svg'

// Components
import {
   Button,
   FooterLayout,
   HeaderLayout,
   FormInput,
   Layout,
   MainLayout,
   Select,
   AnimatedPage
} from '../../components'

//  Redux
import { setAmount, setDifficulty } from '../../store/slices/preferences'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../../store/slices/game'

// Options for Select component
const options = [
   {
      option: "hard",
      icon: <><StarIcon /><StarIcon /><StarIcon /></>
   },
   {
      option: "medium",
      icon: <><StarIcon /><StarIcon /></>
   },
   {
      option: "easy",
      icon: <StarIcon />
   }
]

function StartScreen() {

   const dispatch = useDispatch()
   const navigate = useNavigate();

   const { difficulty, amount } = useSelector(state => state.preferences)

   const [isInputError, setIsInputError] = useState(false);
   const [isSelectError, setIsSelectError] = useState(false);

   // Handle Amount input
   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setAmount(parseFloat(e.currentTarget.value.replace(/-/, ''))))
   }

   // Handle Play game button
   const handleOnClick = () => {
      (amount === 0) && setIsInputError(true);
      (difficulty === null) && setIsSelectError(true);

      if (amount === 0 || difficulty === null) return

      navigate('/game')
      dispatch(fetchQuestions({ difficulty, amount }))
   }

   return (
      <AnimatedPage>

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

                  <FormContainer icon={<DifficultyIcon />} title="Difficulty">
                     <Select
                        options={options}
                        onSelect={setDifficulty}
                        error={isSelectError}
                     />
                  </FormContainer>

                  <FormContainer icon={<AmountIcon />} title="Amount">
                     <FormInput
                        name="amount"
                        type="number"
                        onChange={handleOnChange}
                        autoComplete="off"
                        error={isInputError}
                     />
                  </FormContainer>


               </MainLayout>

               <FooterLayout>
                  <Button
                     variant="primary"
                     onClick={handleOnClick}
                  >
                     Play Game
                  </Button>
               </FooterLayout>

            </Layout>
         </div>

      </AnimatedPage>
   )
}

export default StartScreen
