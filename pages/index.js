import Link from 'next/link';
function HomePage() {
  return (
     <div>
        <h1>Team Chromogen!</h1>
        <h2>
          <Link href="/docs"><a>Docs</a></Link>
        </h2>
        <h2>
          <Link href="/demo"><a>Demo</a></Link>
        </h2>
     </div>
  )
}

export default HomePage