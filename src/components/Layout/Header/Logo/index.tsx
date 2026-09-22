import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
            <Image
                src="/images/logo/anwars-logo.webp"
                alt="Anwar's Bridal Studio"
                width={80}
                height={80}
                quality={100}
                className="rounded-full w-20 h-20"
            />
        </Link>
    );
};

export default Logo;
