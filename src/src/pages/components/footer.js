import Link from "next/link"
import HEAD from 'next/head'
import styles from '@/styles/headfooter.module.css'
import Script from "next/script"

export default function Footer() {
  return (
    <>
      <HEAD>
        <Script src="https://kit.fontawesome.com/f27abcd726.js" crossorigin="anonymous"></Script>
      </HEAD>
      <footer className={styles.Footer}>
        <div className={styles.flex}>
          <Link href="/" className={styles.ftitle}>
            <h2>電脳サークル</h2>
          </Link>
          <nav>
            <ul className={styles.footnav}>

              <div className={styles.list}>
                <Link href="/access">
                  <li>Access</li>
                  <p>東京農工大学 小金井キャンパス 部室棟 A205</p>
                </Link>
              </div>

              <div className={styles.list}>
                {/* とりあえず質問箱 */}
                <a href="https://t.co/ZF59XsfvuR" target="_blank" rel="noopener noreferrer">
                  <li>Contact</li>
                </a>
                <p>Mail adress:</p>
              </div>

              <div className={styles.list}>
                <a href="https://forms.gle/m3sc5g7V8iBU11oP9" target="_blank" rel="noopener noreferrer">
                  <li>Join</li>
                  <p>入部フォーム</p>
                </a>
              </div>

            </ul>

            <ul className={styles.ficon}>
              <div className={styles.iconlist}>
                <a href="https://twitter.com/noko_denno" target="_blank" rel="noopener noreferrer">
                  <li><i className="fa-brands fa-twitter fa-2x"></i></li>
                </a>
              </div>

              <div className={styles.iconlist}>
                <a href="https://github.com/TUAT-Denno" target="_blank" rel="noopener noreferrer">
                  <li><i className="fa-brands fa-github fa-2x"></i></li>
                </a>
              </div>
            </ul>
          </nav>
        </div>

        <small className={styles.footer}>TUAT-Denno-CLUB official website</small>
      </footer>

    </>
  )
}