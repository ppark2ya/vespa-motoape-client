import Image from 'next/image';
import blackLogo from '@/public/logo/logo-black.png';

function Header() {
  return (
    <div>
      <Image src={blackLogo} alt="vespa logo image" width={300} height={59} />
    </div>
  );
}

export default Header;
