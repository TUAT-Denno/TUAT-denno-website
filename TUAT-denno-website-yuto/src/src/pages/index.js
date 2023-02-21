import Link from 'next/link'

const Index = () => {
  return (
    <>
      <title>東京農工大学 電脳サークル</title>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <p><font size="2" face="Impact">電脳サークル</font></p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p><font size="2">About</font></p>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <p><font size="2">Gallery</font></p>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <p><font size="2">FAQ</font></p>
            </Link>
          </li>
          <li>
            <Link href="/join">
              <p><font size="2">Join</font></p>
            </Link>
          </li>
        </ul>
      </nav>
      <footer>
        <h3>TUAT-Denno official website ver0.2.0</h3>
      </footer>
    </>
  )
}
export default Index