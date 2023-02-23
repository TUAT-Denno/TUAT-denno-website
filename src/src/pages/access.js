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
                <p>This is access</p>
                <p>東京農工大学 小金井キャンパス サークルhoge棟 2階 fuga室</p>
                <a href="https://www.tuat.ac.jp/outline/overview/access/koganei/campus_map/" target="_blank" rel="noopener noreferrer">
                    <li>キャンパスマップ</li>
                </a>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3240.0406977625626!2d139.5194707997624!3d35.70061609919245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e583487645fd%3A0x8b4287c79ea9f91d!2z5p2x5Lqs6L6y5bel5aSn5a2mIOWwj-mHkeS6leOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1677122116226!5m2!1sja!2sjp" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </main>
            <FOOTER />

        </>
    )
}