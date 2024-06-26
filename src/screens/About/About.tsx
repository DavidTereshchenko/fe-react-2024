import aboutPhoto from '@/img/about.png';

import styles from './About.module.css';

function About() {
    return (
        <main className={styles.aboutContainer}>
            <div className={styles.aboutInformation}>
                <h1 className={styles.aboutTitle}>About me</h1>
                <p className={styles.aboutText}>
                    Hi! My name is David and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                    React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p className={styles.aboutText}>
                    This page was developed during the course{' '}
                    <a href="https://www.mastersacademy.education/frontend-react-it">
                        &apos;Intro to React&apos; from Masters Academy in 2024.
                    </a>
                </p>
                <p className={styles.aboutText}>
                    This is a social project from MOCG company where I got an opportunity with Frontend mentors and to create my own small
                    small project for the portfolio. You can contact me via <a href="https://t.me/davidka_T">Telegram</a> and check{' '}
                    <a href="https://github.com/DavidTereshchenko">GitHub</a>.
                </p>
            </div>
            <img src={aboutPhoto} alt="about" className={styles.picture} />
        </main>
    );
}

export default About;
