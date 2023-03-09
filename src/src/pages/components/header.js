import Link from 'next/link'
import HEAD from 'next/head'
import styles from '@/styles/headfooter.module.css'
import Script from "next/script"
import Image from 'next/image'
import denno_icon from 'public/denno-ico.png'
import twitter_icon from 'public/Twitter_icon.png'

export default function Header() {
  return (
    <>
      <HEAD>
        <Script src="https://kit.fontawesome.com/f27abcd726.js" crossorigin="anonymous"></Script>
      </HEAD>
      <header className={styles.Header}>
        <div>
          <Link href={"/"}>
            <Image
              priority={true}
              src={denno_icon}
              alt="icon"
              className={styles.hlogo}
            />
          </Link>
        </div>
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

            <Link href="/access">
              <li>ACCESS</li>
            </Link>

            {/* リンクを入部フォームにする */}
            <a href="https://www.tuat.ac.jp/" target="_blank" rel="noopener noreferrer">
              <li>JOIN</li>
            </a>

            <a href="https://twitter.com/noko_denno" target="_blank" rel="noopener noreferrer">
              <li><i className="fa-brands fa-twitter"></i>
                <Image
                  priority={true}
                  src={twitter_icon}
                  alt="icon"
                  className={styles.twlogo}
                /></li>
            </a>

          </ul>
        </nav>
      </header>

    </>
  )
}