import React, { useRef, useState } from 'react'
import styles from './Select.module.scss'

import classNames from 'classnames';
import transition from '../../styles/transition.module.scss'
import { CSSTransition } from 'react-transition-group';

import { useDispatch } from 'react-redux';
import { IOptions } from '../../types/types';

import useOnClickOutside from '../../hooks/useOnClickOutside';

type Props = {
   options: IOptions[],
   onSelect: (value: string) => void,
   placeholder?: string,
   error?: boolean
}

function Select({ options, onSelect, placeholder, error }: Props) {

   const dispatch = useDispatch()
   const ref = useRef(null);
   const nodeRef = React.useRef(null)

   const [isOpen, setIsOpen] = useState(false);

   const [selectedOption, setSelectedOption] = useState("");

   const toggling = () => setIsOpen(!isOpen);

   const onOptionClicked = (value: string) => () => {
      setSelectedOption(value);
      dispatch(onSelect(value));
      setIsOpen(false);
   };

   useOnClickOutside(ref, () => setIsOpen(false));

   return (
      <div className={styles.container} ref={ref}>
         <div
            className={classNames(
               styles.header,
               isOpen && styles.isOpen,
               error && styles.isError
            )}
            onClick={toggling}>
            {selectedOption || (placeholder ? placeholder : "Select...")}
         </div>


         <CSSTransition
            in={isOpen}
            timeout={300}
            classNames={transition}
            unmountOnExit
            nodeRef={nodeRef}
         >
            <div className={styles.listContainer} ref={nodeRef}>
               <ul>
                  {options ?
                     options.map((o: IOptions) => (
                        <li onClick={onOptionClicked(o.option)} key={Math.random()}>
                           {o.option}
                           <div className={styles.icon}>
                              {o.icon}
                           </div>
                        </li>
                     )) :
                     <li>Provide Options</li>
                  }
               </ul>
            </div>
         </CSSTransition>



      </div>
   )
}

export default Select
