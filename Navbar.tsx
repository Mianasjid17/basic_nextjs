import Link from 'next/link';

interface NavbarProps {
  // Add any props you need here
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <span>Contact</span>
          <ul>
            <li>Phone: 0305-7666385</li>
            <li>Email: <a href="mailto:mianasjid17@gmail.com">mianasjid17@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/mianasjid/" target="_blank" rel="noopener noreferrer">Mian Asjid</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;