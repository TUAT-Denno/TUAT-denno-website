import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/faq.module.css'

import HEADER from './components/header'
import FOOTER from './components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>東京農工大学 電脳サークル</title>
        <meta name="description" content="東京農工大学電脳サークルの紹介ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/電脳サークル.png" />
      </Head>

      <HEADER />
      <main>
        <h1>よくある質問</h1>
        <details>
          <summary className={styles.Question}>活動頻度は？</summary>
          <div className={styles.Answer}>
            週一回、1時間程度のミーティングを行っています。
          </div >
        </details>

      </main>
      <FOOTER />

    </>
  )
}