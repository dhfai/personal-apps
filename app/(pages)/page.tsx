import styles from '@/styles/module/Home.module.scss';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <header className={styles.navbar}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.hamburger}>
          <div />
          <div />
          <div />
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.left}>
          <div className={styles.illustration}>
            <h1>
            bagian animasi ilustrasi
            </h1>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.content}>
            <h1>bagian content</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
