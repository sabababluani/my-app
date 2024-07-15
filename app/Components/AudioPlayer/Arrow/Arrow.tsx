import Image from "next/image";
import styles from './Arrow.module.scss';
import Link from 'next/link';

const ArrowLink: React.FC = () => (
    <div className={styles.arrow}>
        <Link href='#'>
            <Image src='/Arroww.png' alt='arrow' width={32} height={32} />
        </Link>
    </div>
);

export default ArrowLink;
