import Link from 'next/link'

const Index = () => {
  return (
    <>
      <title>東京農工大学 電脳サークル</title>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <p>電脳サークル</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <p>Gallery</p>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <p>FAQ</p>
            </Link>
          </li>
          <li>
            <Link href="/join">
              <p>Join</p>
            </Link>
          </li>
        </ul>
      </nav>
      <footer>
        <h3>TUAT-Denno official website ver1.1.0</h3>
      </footer>
    </>
  )
}

export default Index