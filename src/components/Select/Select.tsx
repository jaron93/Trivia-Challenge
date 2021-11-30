import React, { useRef, useState } from 'react'
import styles from './Select.module.scss'

import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import useOnClickOutside from '../../hooks/useOnClickOutside';

function Select({ options, select, placeholder }: any) {

   const dispatch = useDispatch()
   const ref = useRef(null);

   const [isOpen, setIsOpen] = useState(false);

   const [selectedOption, setSelectedOption] = useState(false);

   const toggling = () => setIsOpen(!isOpen);

   const onOptionClicked = (value: any) => () => {
      setSelectedOption(value);
      dispatch(select(value));
      setIsOpen(false);
   };

   useOnClickOutside(ref, () => setIsOpen(false));

   return (
      <div className={styles.container} ref={ref}>
         <div className={classNames(styles.header, isOpen && styles.isOpen)} onClick={toggling}>
            {selectedOption || (placeholder ? placeholder : "Select...")}
         </div>
         {isOpen && (
            <div className={styles.listContainer}>
               <ul>
                  {options ?
                     options.map((option: any) => (
                        <li onClick={onOptionClicked(option)} key={Math.random()}>
                           {option}
                        </li>
                     )) :
                     <li>Provide Options</li>
                  }
               </ul>
            </div>
         )}
      </div>
   )
}

export default Select
