import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import HEADER from './components/header'
import FOOTER from './components/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>東京農工大学 電脳サークル</title>
        <meta name="description" content="東京農工大学電脳サークルの紹介ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dennofavicon.png" />
      </Head>
      <div className={styles.welcome_back}>
        <div className={styles.welcome}>
          <space>Welcome</space> <space>to</space> <space>TUAT</space > <space>DENNO-CLUB</space> <space>Website!!</space>
        </div>
      </div>
      <HEADER />
      <div className={styles.container}>

        <main>
          <div className={styles.hometitle}>
            <h1>電脳サークルへようこそ！！</h1>
          </div>
        </main>
      </div>
      <FOOTER />
    </>
  )
}
