import React from 'react'
import styles from './Layout.module.scss'

function Layout({ children }: any) {
   return (
      <div className={styles.element}>
         {children}
      </div>
   )
}

export default Layout
