import Link from 'next/link'
import '../css/NotFound/NotFound.css'
 
export default function NotFound() {
  return (
    <div className='err-holder'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='link-home' href="/">Return Home</Link>
    </div>
  )
}