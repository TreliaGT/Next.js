// components/ImageText.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ImageText.module.scss';

const ImageText = () => {
    const image_url = "https://picsum.photos/300/300";
    return (
        <section className={`${styles.textcontent} fade-in`}>
            <div>
                <div className={styles.left}>
                    <h2>THis is a title about something</h2>
                    <p>You can control how long the fade-in effect lasts by adjusting the 1s in the fadeIn animation. If you'd like a faster or slower fade-in, change the 1s to another value (e.g., 2s for 2 seconds or 500ms for half a second).</p>
                    <p>You can control how long the fade-in effect lasts by adjusting the 1s in the fadeIn animation. If you'd like a faster or slower fade-in, change the 1s to another value (e.g., 2s for 2 seconds or 500ms for half a second).</p>

                    <Link href="/" className="mainbtn"><span>Learn More</span></Link>
                </div>
                <div className={styles.right}>
                    <Image
                        src={image_url}
                        alt='image'
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                </div>
            </div>
        </section>
    );
}

export default ImageText;
