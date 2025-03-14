'use client';
import Image from 'next/image';
import { useRef } from 'react';
import styles from '../styles/homebanner.module.scss';
import { gsap } from "gsap";
import Link from 'next/link';


const HomeBanner = () => {
    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    const image_url = "https://picsum.photos/300/300";

    let requestAnimationFrameId: number | null = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;

    const manageMouseMove = (e) => {

        const { movementX, movementY } = e
        xForce += movementX * speed;
        yForce += movementY * speed;


        if (requestAnimationFrameId == null) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    }

    const lerp = (start: number, target: number, amount: number) => start * (1 - amount) + target * amount;
    const animate = () => {

        xForce = lerp(xForce, 0, easing);

        yForce = lerp(yForce, 0, easing);

        gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` })

        gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })

        gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })


        if (Math.abs(xForce) < 0.01) xForce = 0;

        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce != 0 || yForce != 0) {
            requestAnimationFrame(animate);
        }

        else {
            cancelAnimationFrame(requestAnimationFrameId)
            requestAnimationFrameId = null;
        }
    }

    return (
        <section onMouseMove={(e) => { manageMouseMove(e) }} className={styles.main} >
            <div ref={plane1} className={styles.plane}>
                <Image
                    src={image_url}
                    alt='image'
                    width={300}
                    height={300}

                />
                <Image
                    src={image_url}
                    alt='image'
                    width={300}
                    height={300}

                />
                <Image
                    src={image_url}
                    alt='image'
                    width={225}
                    height={225}

                />

            </div>

            <div ref={plane2} className={styles.plane}>
                <Image
                    src={image_url}
                    alt='image'
                    width={250}
                    height={250}

                />
                <Image
                    src={image_url}
                    alt='image'
                    width={200}
                    height={200}

                />
                <Image
                    src={image_url}
                    alt='image'
                    width={225}
                    height={225}

                />

            </div>

            <div ref={plane3} className={styles.plane}>
                <Image
                    src={image_url}
                    alt='image'
                    width={150}
                    height={150}

                />
                <Image
                    src={image_url}
                    alt='image'
                    width={200}
                    height={200}

                />

            </div>
            <div className={styles.title}>

                <h1>Floating Images Gallery</h1>

                <Link href="/" className="mainbtn"><span>Let's Chat!</span></Link>

            </div>
        </section>
    )

}

export default HomeBanner;
