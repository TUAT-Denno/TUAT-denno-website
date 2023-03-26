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
      <div className={styles.welcome_background}>
        <div className={styles.welcome}>
          <space>Welcome</space> <space>to</space> <space>TUAT</space > <space>DENNO-CLUB</space> <space>Website!!</space>
        </div>
      </div>
      <HEADER />
      <div className={styles.container}>
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
              alt="toufu's atcoder code"
              className={styles.picture1}
            />

            {/*自分のPCスペックでは画質が終わってるので，強いPC持ってる人置換お願いします */}
            <Image
              src={RealBoard_pic}
              alt="Real Board"
              className={styles.picture2}
            />
          </div>
        </main>
      </div>
      <FOOTER />
    </>
  )
}
