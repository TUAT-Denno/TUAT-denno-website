import Link from "next/link"
import styles from '@/styles/headfooter.module.css'

export default function Header(){
  return(
    <>
      <heder className={styles.Header}>
        <Link href="/">
          <h1 className={styles.header}>電脳サークル</h1>
        </Link>
        <nav>
          <ul className={styles.headnav}>
            <Link href="/">
              <li>HOME</li>
            </Link>

            <Link href="/about">
              <li>ABOUT</li> 
            </Link>

            <Link href="/gallery">
              <li>GALLERY</li>
            </Link>

            <Link href="/faq">
              <li>FAQ</li>
            </Link>

            {/* リンクを入部フォームにする */}
            <a href="https://www.tuat.ac.jp/" target="_blank" rel="noopener noreferrer">
              <li>JOIN</li>
            </a>

          </ul>
         </nav>
      </heder>
    </>
    )
}