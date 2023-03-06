import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import hakken_kouken from '/public/character_set_c.jpg'
import HEADER from './components/header'
import FOOTER from './components/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>東京農工大学 電脳サークル</title>
        <meta name="description" content="東京農工大学電脳サークルの紹介ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HEADER />

      <div className={styles.begin_animation}>
        <div className={styles.container}>
          <main>
            <div className={styles.hometitle}>
              <welcome>
                <h2 >Welcome to</h2>
              </welcome>
              <h1>DENNO-CLUB!</h1>
            </div>
            {/*pixabayの写真はライセンス的にどうか分からなかったからとりまハッケンコウケン*/}
            {/*画像はhttps://www.tuat.ac.jp/i-campus/koho/data/data.html　から*/}
            <Image
              src={hakken_kouken}
              alt="TUAT-character"
              className={styles.picture}
            />
          </main>
        </div>
      </div>

      <FOOTER />
    </>
  )
}
