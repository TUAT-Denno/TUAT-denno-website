import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import code_pic from "public/index_pictures/code.png"
import RealBoard_pic from "public/index_pictures/RealBoard.png"
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
      <main>
        <div className={styles.hometitle_container}>
          <div className={styles.hometitle}>
            <h1>電脳サークルへようこそ！！</h1>
          </div>
        </div>
        {/*とりあえず適当なコードですが，もしあったらRealBoardとかのコードとかの方が良いかも*/}
        <div className={styles.picture_container}>
          <Image
            src={code_pic}
            alt="code"
            className={styles.picture1}
          />

          <Image
            src={RealBoard_pic}
            alt="Real Board"
            className={styles.picture2}
          />
        </div>
        <HEADER />
        <nav className={styles.LinkList} >
          <Link className={styles.pageIntroduction} style={{ backgroundColor: 'rgb(63, 154, 104)' }} href={"/about"}>
            <h1>ABOUT</h1>
          </Link>

          <Link className={styles.pageIntroduction} style={{ backgroundColor: 'rgb(0,58,70)' }} href={"/gallery"}>
            <h1>GALLERY</h1>
          </Link>
          <Link className={styles.pageIntroduction} style={{ backgroundColor: 'rgb(62, 115, 154)' }} href={"/faq"}>
            <h1>FAQ</h1>
          </Link>
          <Link className={styles.pageIntroduction} style={{ backgroundColor: 'black' }} href={"/access"}>
            <h1>ACCESS</h1>
          </Link>
        </nav>
      </main>
      <FOOTER />
    </>
  )
}
