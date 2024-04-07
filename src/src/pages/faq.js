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
        {/*detailsタグで囲まれている部分がQ&Aテンプレート*/}
        {/*summaryタグで囲まれている部分が質問*/}
        <details>
          <summary className={styles.question}>サークルの活動内容は？ </summary>
          CPU、電子工作、ゲーム開発の3つを主な活動内容としています。
        </details>

        <details>
          <summary className={styles.question}>活動頻度は？</summary>
          定期的なサークル全体の活動は週一回で、月曜日の22時から1時間程度のオンラインミーティングを行っています。
        </details>

        <details>
          <summary className={styles.question}>部費は？</summary>
          部費は徴収しておりません。
        </details>

        <details>
          <summary className={styles.question}>入部方法は？ </summary>
          下記のGoogleフォームから入部希望をお知らせください。<br />
          <a href="https://forms.gle/SZ9yEJmpJGb2my6EA" target="_blank" rel="noopener noreferrer" className={styles.url}>https://forms.gle/SZ9yEJmpJGb2my6EA</a>
        </details>

        <details>
          <summary className={styles.question}>入部フォーム送信後の流れは？</summary>
          こちらからメールをお送りします。
        </details>

        <details>
          <summary className={styles.question}>部室は？</summary>
          部室は、東京農工大学小金井キャンパスの7号館の3Fにあります。<br />
        </details>

        <details>
          <summary className={styles.question}>サークルに参加するためには、特定の学部や学科に所属する必要がありますか？</summary>
          どの学部学科でも参加できます。
        </details>

        <details>
          <summary className={styles.question}>連絡が取りたい</summary>
          以下のメールアドレスにメールをお送りください。<br />
          <a href="mailto:noko.denno@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.url}>noko.denno@gmail.com</a>
        </details>
      </main>
      <FOOTER />

    </>
  )
}