import Link from 'next/link'

const About = () => {
    return(
      <>
      <header>
        <title>東京農工大学 電脳サークル</title>
      </header>

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
        <h1>FAQ Page</h1>
      </footer>
      </>
    )
}
export default About