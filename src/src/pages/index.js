import Link from 'next/link'

const Index = () => {
  return (
    <>
      <title>農工大　電脳サークルへようこそ!</title>
      <header>
        <div class="header_inner">
          <div class="header_left">
            <h3>東京農工大学 電脳サークルの公式ウェブサイトです</h3>
          </div>
          <div class="header_right">
            <ul>
              <li>
                <link href='/about'>
                  <a>About</a>
                </link>
              </li>
              <li>
                <a>活動実績</a>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </header>
      <body>
        <p1>TUAT-Denno official website ver1.0.0</p1>
      </body>
    </>
  )
}

export default Index