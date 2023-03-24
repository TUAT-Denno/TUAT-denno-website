import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/gallery.module.css'

import HEADER from './components/header'
import FOOTER from './components/footer'

import RealBoard_Logo from "public/gallery_pictures/RealBoard/RealBoardLogo.png"
import RealBoard_picture from "public/gallery_pictures/RealBoard/RealBoard.png"
import jojo_picture from "public/gallery_pictures/jojo_dummy.png"


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
            src={RealBoard_Logo}
            alt="RealBoardLogo"
            className={styles.picture}
          />
        </div>

        <div className={styles.page_container}>
          <div className={styles.title}>
            <div className={styles.h1}>
              <h1>RealBoard</h1>
            </div>
          </div>
          <div className={styles.picture_container}>
            {/*ドライブの写真使用許可もらったら置換*/}
            <Image
              src={RealBoard_picture}
              alt="RealBoard"
              className={styles.picture}
            />
          </div>
          <div className={styles.text_container}>
            <div className={styles.normalTEXT}>
              <p>
                {/*適当なので後でちゃんと考える*/}
                体感型スノボゲーム”RealBoard”では、特殊なコントローラーを使い実際のプレイングボードの傾きと
                ゲーム画面上のプレイヤーの動きを連動させることで、<b>今までにない臨場感</b>を体験できます。
                さらに実際にゲレンデを滑るサウンドや振動を再現し、よりリアルな滑走体験を演出します。
                臨場感あふれる、よりリアルなスノボー感を追求するため、自然のグラフィックやサウンドにこだわりました。
                また、専用コントローラーの”リボコン”により<b>触覚再現や本物のスノボーに近い重心移動による操作</b>が可能になり、
                ゲームが得意でない方でも直感的に操作できます。<br /><br />
                ダウンロードは<b><a href='https://gameparade.creators-guild.com/works/751' className={styles.url}> こちら</a></b>から
              </p>
            </div>
          </div>
        </div>
        {/*ここまで */}

        <div className={styles.page_container}>
          <div className={styles.introduce}>
            <h1>・ジョジョ立ちプロジェクト</h1>
          </div>
        </div>
        <div className={styles.page_container}>
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
                ジョジョ立ちを検知し、後ろのモニターに表示する
              </p>
            </div>
          </div>
        </div>
      </main>
      <FOOTER />

    </>
  )
}