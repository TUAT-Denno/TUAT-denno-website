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
            <h1>東京農工大学 電脳サークルへようこそ！！</h1>
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
        <div className={styles.concept_container}>
            <Image
              src={code_pic}
              alt="toufu's atcoder code"
              className={styles.concept_picture}
            />
            <div className={styles.concept_con}>
              <h4>Concept</h4>
              <h2>企画、製作、発表、ものづくりの全てを楽しむ</h2>
              <p>2021年東京農工大学公認サークルとして新たに発足した我々は、プログラミングやAI，電子工作，3d プリンターなどを活用しサ ークルで作品を制作し一年を通して企画から製造そして発表まで、ものづくりの楽しさを余す ことなく体験することをコンセプトに活動しています。</p>
            </div>
            
          </div>

          <div className={styles.gallery_container}>
            <div className={styles.gallery_con}>
              <h4>Gallery</h4>
              <h2>作った分だけ強くなる。</h2>
              <p>ゲーム、webサイト、cpu、ロボットみんなで作った分だけ強くなる。</p>
              <p>電脳サークルが作ってきた作品の記録是非ご覧ください。</p>
              <Link href="/gallery">
                <p>作品一覧はこちら</p>
              </Link>
            </div>
            <Image
              src={RealBoard_pic}
              alt="Real Board"
              className={styles.gallery_picture}
            />
          </div>

          <div className={styles.news_container}>
            <div className={styles.news_con}>
             <h3>NEWS</h3>
            </div>
            
          </div>
          <div className={styles.faqjointwitter}>
            <div className={styles.faqjoin}>
              <div className={styles.faq_container}>
                <h3>FAQ</h3>
                <Link href="/faq">
                  <p>よくある質問</p>
                </Link>
              </div>
              <div className={styles.join_container}>
                <h3>Join</h3>
                <a href="https://forms.gle/m3sc5g7V8iBU11oP9" target="_blank" rel="noopener noreferrer">
                入部はこちらから
                </a>
              </div>
            </div>

            <div className={styles.twitter}>
              <h3>Twitter</h3>
              <a class="twitter-timeline" data-lang="ja" data-height="400" data-theme="light" href="https://twitter.com/noko_denno?ref_src=twsrc%5Etfw">Tweets by noko_denno</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>
        {/* <nav className={styles.LinkList} >
          <Link className={styles.pageIntroduction} style={{ backgroundColor: 'rgb(63, 154, 104)' }} href={"/about"}>
            <h1>ABOUT →</h1>
          </Link>

          <Link className={styles.pageIntroduction} style={{ backgroundColor: 'rgb(0,58,70)' }} href={"/gallery"}>
            <h1>GALLERY →</h1>
          </Link>
          <Link className={styles.pageIntroduction} style={{ backgroundColor: 'rgb(62, 115, 154)' }} href={"/faq"}>
            <h1>FAQ →</h1>
          </Link>
          <Link className={styles.pageIntroduction} style={{ backgroundColor: 'black' }} href={"/access"}>
            <h1>ACCESS →</h1>
          </Link>
        </nav> */}
      </main>
      <FOOTER />
    </>
  )
}
