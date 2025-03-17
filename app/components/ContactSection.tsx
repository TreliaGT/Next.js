// components/ContactSection.tsx
import Link from 'next/link';
import styles from '../styles/ContactSection.module.scss';

const ContactSection = () => {
    // Basic form submission handler (for now, just a console log)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form data here, for now, just log it
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };

    return (
        <section className={styles.contact}>
            <div>
                <div className="right">
                    <h2>This is a title about something</h2>
                    <p>You can control how long the fade-in effect lasts by adjusting the 1s in the fadeIn animation. If you'd like a faster or slower fade-in, change the 1s to another value (e.g., 2s for 2 seconds or 500ms for half a second).</p>
                    <p>You can control how long the fade-in effect lasts by adjusting the 1s in the fadeIn animation. If you'd like a faster or slower fade-in, change the 1s to another value (e.g., 2s for 2 seconds or 500ms for half a second).</p>
                </div>
                <div className="right">
                    <h2>This is a title about something</h2>
                    <p>You can control how long the fade-in effect lasts by adjusting the 1s in the fadeIn animation. If you'd like a faster or slower fade-in, change the 1s to another value (e.g., 2s for 2 seconds or 500ms for half a second).</p>
                    <p>You can control how long the fade-in effect lasts by adjusting the 1s in the fadeIn animation. If you'd like a faster or slower fade-in, change the 1s to another value (e.g., 2s for 2 seconds or 500ms for half a second).</p>
                </div>
            </div>

            <div className={styles.contactForm}>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} required></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <button type="submit" className="mainbtn">Submit</button>
                    </div>
                </form>
            </div>

            <div>
                <Link href="/" className="mainbtn"><span>Learn More</span></Link>
            </div>
        </section>
    );
}

export default ContactSection;
