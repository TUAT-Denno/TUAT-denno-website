import Link from "next/link"
import HEAD from 'next/head'
import styles from '@/styles/headfooter.module.css'

export default function Footer(){
    return(
      <>
        <HEAD>
        <script src="https://kit.fontawesome.com/f27abcd726.js" crossorigin="anonymous"></script>
        </HEAD>
        <footer className={styles.Footer}>
          <div className={styles.flex}>
          <Link href="/" className={styles.ftitle}>
            <h2>電脳サークル</h2>
          </Link>
            <nav>
              <ul className={styles.footnav}>

                <div className={styles.list}>
                  {/* リンクはgooglemapより */}
                  <a href="https://goo.gl/maps/VSqkKW5YZmoBkvMn7" target="_blank" rel="noopener noreferrer">
                    <li>Acsess</li>
                  </a>
                  <p>東京農工大学 小金井キャンパス 部室等のどこか</p>
                </div>

                <div className={styles.list}>
                  {/* とりあえず質問箱 */}
                  <a href="https://t.co/ZF59XsfvuR" target="_blank" rel="noopener noreferrer">
                    <li>Contact</li>
                  </a>
                  <p>Mail adress:</p>
                </div>

                <div className={styles.list}>
                  {/* リンクを入部フォームにする */}
                  <a href="https://www.tuat.ac.jp/" target="_blank" rel="noopener noreferrer">
                    <li>Join</li>
                  </a>
                  <p>入部フォーム</p>
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
        
          <small className={styles.footer}>TUAT-Denno official website</small>
        </footer>
        
      </>
    )
}