import Link from 'next/link'
import HEAD from 'next/head'
import styles from '@/styles/headfooter.module.css'
import Script from "next/script"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import denno_icon from 'public/denno-ico.png'
import twitter_icon from 'public/Twitter_icon.png'
import HAMBURGER from './hamburger'

export default function Header() {
  return (
    <>

      <header className={styles.Header}>
        <div className={styles.left_container}>
          <div className={styles.left}>
            <HAMBURGER />
          </div>
          <div className={styles.right}>
            <Link href={"/"} className={styles.hlogo_container}>
              <Image
                priority={true}
                src={denno_icon}
                alt="icon"
                className={styles.hlogo}
              />
            </Link>
          </div>
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

            <a href="https://forms.gle/m3sc5g7V8iBU11oP9" target="_blank" rel="noopener noreferrer">
              <li>JOIN</li>
            </a>

            <a href="https://twitter.com/noko_denno" target="_blank" rel="noopener noreferrer">
              <li>
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