import styles from '@/styles/module/layout.module.scss';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <header className={styles.navbar}>
        <div className={styles.logo}>dhf.ai</div>
        <div className={styles.hamburger}>
          <div />
          <div />
          <div />
        </div>
      </header>
      {children}
    </div>
  );
}
