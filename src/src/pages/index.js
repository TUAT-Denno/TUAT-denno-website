import Link from 'next/link'

const Index = () => {
  return (
    <>
      <title>Welcomr to 農工大!</title>
        <h3>東京農工大学 電脳サークル</h3>
          <ul>
            <li>
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="/achievements">
                <p>Achievements</p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p>Blog</p>
              </Link>
            </li>
          </ul>
      <footer>
        <p>TUAT-Denno official website ver1.1.0</p>
      </footer>
    </>
  )
}

export default Index