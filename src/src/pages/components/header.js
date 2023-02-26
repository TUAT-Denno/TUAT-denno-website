import Link from 'next/link'
import HEAD from 'next/head'
import styles from '@/styles/headfooter.module.css'

export default function Header(){
  return(
    <>
      <HEAD>
      <script src="https://kit.fontawesome.com/f27abcd726.js" crossorigin="anonymous"></script>
      </HEAD>
      <heder className={styles.Header}>
        <Link href="/">
          <img className={styles.hlogo} src="/dennno-ico.png" alt="icon"></img>
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

            <a href="https://twitter.com/noko_denno" target="_blank" rel="noopener noreferrer">
              <li><i className="fa-brands fa-twitter"></i></li>
            </a>

          </ul>
         </nav>
      </heder>
      
    </>
    )
}