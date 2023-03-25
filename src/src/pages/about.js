import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/about.module.css'

import MakerFaire_Picture from 'public/about_pictures/MakerFaire.png'

import HEADER from './components/header'
import FOOTER from './components/footer'

export default function About() {
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
        <div style={{ paddingLeft: '2px' }}>
          <h1>企画、製作、発表、ものづくりの全てを楽しむ</h1>
        </div>
        <div style={{ paddingLeft: '25px' }}>
          <p>2021年東京農工大学公認サークルとして新たに発足した我々は、<br></br>
            プログラミングやAI、電子工作、3Dプリンターなどを活用しサークルで作品を制作し<br></br>
            一年を通して企画から製造そして発表まで、ものづくりの楽しさを余すことなく体験することをコンセプトに活動しています。
          </p>
          <a href="https://forms.gle/m3sc5g7V8iBU11oP9" target="_blank" rel="noopener noreferrer" className={styles.url}>
            <h3>入部はこちらから</h3>
          </a>
        </div>
        <Image
          src={MakerFaire_Picture}
          alt="MakerFaire_Picture"
          className={styles.picture}
        />
        {/*formの埋め込み*/}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffXKMr5i5Eup2s-CUSnN0WbUXYaQJVtlrI7bSJ_CH2CnVrPw/viewform?embedded=true" width="640" height="439" frameborder="0" marginheight="0" marginwidth="0" className={styles.clubJoin}>読み込んでいます…</iframe>
      </main>
      <FOOTER />

    </>
  )
}