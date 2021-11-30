import styles from './MainLayout.module.scss'

export default function MainLayout({ children }: any) {
   return (
      <main className={styles.element}>
         {children}
      </main>
   )
}

