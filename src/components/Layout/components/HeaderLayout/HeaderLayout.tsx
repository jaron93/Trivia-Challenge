import styles from './HeaderLayout.module.scss'

export default function HeaderLayout({ children }: any) {
   return (
      <header className={styles.header}>
         {children}
      </header>
   )
}


