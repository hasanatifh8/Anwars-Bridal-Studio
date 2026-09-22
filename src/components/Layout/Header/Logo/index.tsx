import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
            <Image
                src="/images/logo/anwars-logo.webp"
                alt="Anwar's Bridal Studio"
                width={64}
                height={64}
                quality={100}
                className="rounded-full"
            />
        </Link>
    );
};

export default Logo;
