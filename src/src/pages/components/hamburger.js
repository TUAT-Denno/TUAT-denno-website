import Link from 'next/link'
import HEAD from 'next/head'
import styles from '@/styles/hamburger.module.css'
import Script from "next/script"
import Image from 'next/image'
import twitter_icon from 'public/Twitter_icon.png'

import { useState } from 'react'

export default function HAMBURGER() {
    const [isOpen, setIsOpen] = useState(false)
    const [isAnimated, setIsAnimated] = useState(false)

    // ハンバーガーメニューが開いているかを判定
    const toggleOpen = () => {
        setIsOpen(!isOpen)
        //ページを開いたときにアニメーションが働かないように，ボタンが押されたタイミングで処理を開始
        setIsAnimated(true);
    }

    return (
        <div>
            <div className={styles.menu_icon_container}>
                {/* ハンバーガーマーク */}
                <div className={styles.hamburger_icon} onClick={toggleOpen}>
                    <div className={!isOpen && isAnimated ? styles.hamburger_icon_appear : ''}>
                        <div className={isOpen && isAnimated ? styles.hamburger_icon_disappear : ''}>
                            <div className={styles.hamburger_icon_line} />
                            <div className={styles.hamburger_icon_line} />
                            <div className={styles.hamburger_icon_line} />
                        </div>
                    </div>
                </div>
                {/* ばつマーク */}
                <div className={styles.cross_icon} onClick={toggleOpen}>
                    <div className={!isOpen && isAnimated ? styles.cross_icon_disappear : ''}>
                        <div style={isAnimated ? {} : { opacity: '0' }}>
                            <div className={isOpen ? styles.cross_icon_appear : ''}>
                                <div className={styles.cross_icon_line} style={{
                                    transform: 'rotate(45deg)',
                                    position: 'absolute'
                                }} />
                                <div className={styles.cross_icon_line} style={{ transform: 'rotate(-45deg)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                isOpen && (
                    //メニュー
                    <div className={styles.menu}>
                        <Link href="/" onClick={toggleOpen}>
                            <li>HOME</li>
                        </Link>

                        <Link href="/about" onClick={toggleOpen}>
                            <li>ABOUT</li>
                        </Link>

                        <Link href="/gallery" onClick={toggleOpen}>
                            <li>GALLERY</li>
                        </Link>

                        <Link href="/faq" onClick={toggleOpen}>
                            <li>FAQ</li>
                        </Link>

                        <a href="https://forms.gle/m3sc5g7V8iBU11oP9" target="_blank" rel="noopener noreferrer">
                            <li>JOIN</li>
                        </a>
                        <a href="https://twitter.com/noko_denno" target="_blank" rel="noopener noreferrer" >
                            <li><i className="fa-brands fa-twitter"></i>
                                <Image
                                    priority={true}
                                    src={twitter_icon}
                                    alt="icon"
                                    className={styles.twlogo}
                                /></li>
                        </a>

                        <button onClick={toggleOpen}>Close</button>
                    </div>
                )
            }
        </div >
    )
}
