import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/about.module.css'

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
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h4>2021年東京農工大学公認サークルとして新たに発足した我々は、
              プログラミングやAI、電子工作、3Dプリンターなどを活用してサークルで作品を製作し、
              一年を通して企画から製造そして発表まで、ものづくりの楽しさを余すことなく体験することをコンセプトに活動しています。<br />
              <a href="https://forms.gle/SZ9yEJmpJGb2my6EA" target="_blank" rel="noopener noreferrer" className={styles.url}>
                <h3>入部はこちらから</h3>
              </a>
            </h4>
          </div>
          <div className={styles.mapContainer}>
            <h2>部室 </h2>
            <h3>東京農工大学 小金井キャンパス 7号館 3F</h3>
            {/*mapの埋め込み*/}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3240.0406977625626!2d139.5194707997624!3d35.70061609919245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e583487645fd%3A0x8b4287c79ea9f91d!2z5p2x5Lqs6L6y5bel5aSn5a2mIOWwj-mHkeS6leOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1677122116226!5m2!1sja!2sjp/viewform?embedded=true" width="90%" height="450" style={{ border: "0", margin: "0 auto" }} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </main>
      <FOOTER />

    </>
  )
}