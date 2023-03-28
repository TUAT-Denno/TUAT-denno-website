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
        <div className={styles.About_container}>
          <Image
            src={code_pic}
            alt="code"
            className={styles.About_picture}
          />
          <div className={styles.About_con}>
            <h4>About</h4>
            <h2>企画、製作、発表、ものづくりの全てを楽しむ</h2>
            <p>2021年東京農工大学公認サークルとして新たに発足した我々は、
              プログラミングやAI、電子工作、3Dプリンターなどを活用しサークルで作品を制作し
              一年を通して企画から製造そして発表まで、ものづくりの楽しさを余すことなく体験することをコンセプトに活動しています。</p>
            <Link href="/gallery">
              <button><p>詳しくはこちら</p></button>
            </Link>
          </div>
        </div>

        <div className={styles.gallery_container}>
          <div className={styles.gallery_con}>
            <h4>Gallery</h4>
            <h2>作った分だけ強くなる。</h2>
            <p>ゲーム、コントローラー、CPU<br />みんなで作った分だけ強くなる。</p>
            <p>電脳サークルが作ってきた作品の記録をご覧ください。</p>
            <Link href="/gallery">
              <button><p>作品一覧はこちら</p></button>
            </Link>
          </div>
          <Image
            src={RealBoard_pic}
            alt="Real Board"
            className={styles.gallery_picture}
          />
        </div>

        <div className={styles.news_container}>
          <div className={styles.news_titel_container}>
            <h3>NEWS</h3>
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
              <a className="twitter-timeline" data-lang="ja" data-width="100%" data-height="600" data-theme="light" href="https://twitter.com/noko_denno?ref_src=twsrc%5Etfw">Tweets by noko_denno<br /><br /> 読み込んでいます…</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>
        </div>
      </main>
      <FOOTER />
    </>
  )
}
