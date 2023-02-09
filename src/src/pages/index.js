import Link from 'next/link'

const Index = () => {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <Link href="/linkSample">
        <a>link Sample Page</a>
      </Link>
    </>
  )
}

export default Index