import Link from 'next/link';

export default function Header() {
  return (
    <nav className='flex flex-row space-x-5'>
      <Link href={'/'}>home</Link>
      <Link href={'/portfolio'}>portfolio</Link>
      <Link href={'/team'}>team</Link>
      <Link href={'/profile'}>profile</Link>
    </nav>
  );
}
