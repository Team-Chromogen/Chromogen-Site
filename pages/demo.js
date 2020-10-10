import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1> Demo </h1>
      <h2>
          <Link href="/docs">
            <a>Docs</a>
          </Link>
        </h2>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </>
  )
}