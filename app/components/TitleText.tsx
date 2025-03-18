// components/TitleText.js
import Link from 'next/link';
import styles from '../styles/TitleText.module.scss';

const TitleText = () => {
    return (
        <section className={`${styles.textcontent} fade-in`}>
            <div>
                <div>
                    <h2>THis is a title about something</h2>

                </div>
                <div className={styles.right}>
                    <p>You can control how long the fade-in effect lasts by adjusting the 1s in the fadeIn animation. If you'd like a faster or slower fade-in, change the 1s to another value (e.g., 2s for 2 seconds or 500ms for half a second).</p>
                    <p>You can control how long the fade-in effect lasts by adjusting the 1s in the fadeIn animation. If you'd like a faster or slower fade-in, change the 1s to another value (e.g., 2s for 2 seconds or 500ms for half a second).</p>
                    <Link href="/" className="mainbtn"><span>Learn More</span></Link>
                </div>
            </div>
        </section>

    );
}

export default TitleText;
