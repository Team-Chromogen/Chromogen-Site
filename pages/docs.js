import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1> Docs </h1>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
      <h2>
          <Link href="/demo">
            <a>Demo</a>
          </Link>
        </h2>
    </>
  )
}