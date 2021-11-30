import styles from './FooterLayout.module.scss';

export default function FooterLayout({ children }: any) {
   return (
      <footer className={styles.element}>
         {children}
      </footer>
   )
}

