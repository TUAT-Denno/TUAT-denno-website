import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/gallery.module.css'

import HEADER from './components/header'
import FOOTER from './components/footer'

import RealBoard_Logo from "public/gallery_pictures/RealBoard/RealBoardLogo.png"
import RealBoard_picture from "public/gallery_pictures/RealBoard/RealBoard.png"
import RealBoard_MakerFaire from "public/gallery_pictures/RealBoard/MakerFaire.png"
import jojo_picture from "public/gallery_pictures/jojo/jojo.jpg"

export default function Gallery() {
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
        <div className={styles.introduce}>
          <h1>作品一覧</h1>
        </div>

        {/*新しく作品紹介を追加したい場合は「ここまで」と書かれている部分までをコピペ & 改変してください */}
        <div className={styles.page_container}>
          <Image
            src={RealBoard_picture}
            alt="RealBoardPlay"
            className={styles.picture}
          />
        </div>
        {/* ページの分かれ目 */}
        <div className={styles.page_container}>
          <div className={styles.title}>
            <div className={styles.h1} style={{ color: "rgb(154, 198, 255)" }}>
              <h1>RealBoard</h1>
            </div>
          </div>
          <div className={styles.picture_container}>
            <Image
              src={RealBoard_MakerFaire}
              alt="RealBoardMakerFaire"
              className={styles.picture}
              style={{ objectPosition: "center bottom" }}
            />
          </div>
          <div className={styles.text_container}>
            <div className={styles.normalTEXT}>
              <p>
                RealBoardは<b>体感型スノボゲーム</b> です。
                特殊なコントローラーでプレイヤーの重心を検出し、それに合わせてボードを制御し動かすことで、
                実際のスノーボードに近い体験をできます。
                入力に対するキャラクターの動きや物理演算、グラフィックなどのソフト部分はUnreal Engine5、Blenderでの制作です。
                <br /><br />ダウンロードは<b><a href='https://gameparade.creators-guild.com/works/751' className={styles.url} target="_blank" rel="noopener noreferrer"> こちら</a></b>から
              </p>
            </div>
          </div>
        </div>
        {/*ここまで */}

        <div className={styles.page_container}>
          <Image
            src={jojo_picture}
            alt="jojo"
            className={styles.picture}
          />
        </div>
        <div className={styles.page_container}>
          <div className={styles.title}>
            <div className={styles.h1}>
              <h1>ジョジョ立ちプロジェクト</h1>
            </div>
          </div>
          <div className={styles.picture_container}>
            <Image
              src={jojo_picture}
              alt="jojo"
              className={styles.picture}
            />
          </div>
          <div className={styles.text_container}>
            <div className={styles.normalTEXT}>
              <p>
                ジョジョ立ちプロジェクトは、東京農工大学ステージ研究会さん(
                <a href="https://twitter.com/tuatsyoumei" className={styles.url} target="_blank" rel="noopener noreferrer">@tuatsyoumei</a>
                )と協力して行いました。
                Openposeを用いて骨格推定を行い、前処理を行った後、各関節の信頼度を考慮した重み付き距離の総和により見本のジョジョ立ちと比較することで、
                ポーズがどのキャラクターのジョジョ立ちなのか認識し、幽波紋(スタンド)を透過スクリーンに投影します。
              </p>
            </div>
          </div>
        </div>
      </main >
      <FOOTER />

    </>
  )
}