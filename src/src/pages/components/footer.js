import Link from "next/link"
import styles from '@/styles/headfooter.module.css'

export default function Footer(){
    return(
      <>
        <footer className={styles.Footer}>

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
                {/* リンクはTwitter */}
                <a href="https://twitter.com/noko_denno" target="_blank" rel="noopener noreferrer">
                  <li>Twitter</li>
                </a>
              </div>

              <div className={styles.list}>
                {/* とりあえず質問箱 */}
                <a href="https://t.co/ZF59XsfvuR" target="_blank" rel="noopener noreferrer">
                  <li>Contact</li>
                  <p>お問い合わせ</p>
                </a>
                <p>メールアドレスあったら</p>
              </div>

              <div className={styles.list}>
              <Link href="/faq">
                  <li>FAQ</li>
                  <p>よくない質問</p>
                </Link>
              </div>

              <div className={styles.list}>
                {/* リンクを入部フォームにする */}
                <a href="https://www.tuat.ac.jp/" target="_blank" rel="noopener noreferrer">
                  <li>Join</li>
                  <p>入部フォーム</p>
                </a>
              </div>

            </ul>
          </nav>
          <h5 className={styles.footer}>TUAT-Denno official website</h5>
        </footer>
        
      </>
    )
}