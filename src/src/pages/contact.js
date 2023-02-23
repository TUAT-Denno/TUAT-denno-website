import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

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
                <p>This is contact</p>
                <h3>メールアドレス</h3>
                <p>example@gmail.com</p>
                <a class="twitter-timeline" data-lang="ja" data-width="600" data-height="700" data-theme="light" href="https://twitter.com/noko_denno?ref_src=twsrc%5Etfw">Tweets by noko_denno</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </main>
            <FOOTER />

        </>
    )
}

