import React from 'react'
import styles from './Layout.module.scss'

function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className={styles.element}>
         {children}
      </div>
   )
}

export default Layout
