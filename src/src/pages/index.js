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
        <title>電脳サークル</title>
        <meta name="description" content="東京農工大学電脳サークルの紹介ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/電脳サークル.png" />
      </Head>

      <HEADER />
      <main>
        <p>This is Home</p>
      </main>
      <FOOTER />

    </>
  )
}

