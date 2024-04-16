import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import * as OutlineIcons from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <div>
                    <a>
                        By{" "}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>
            <div>
                <OutlineIcons.ChatBubbleLeftRightIcon className={styles.iconSize} />
            </div>
            <div className={styles.center}>
                <div className={styles.title}>MY FORUM</div>
            </div>
            <div className={styles.grid}>
                <Link
                    href="/forum"
                    className={styles.card}
                >
                    <h2>
                        This Is Forum <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </Link>

                <Link
                    href="/signup"
                    className={styles.card}
                >
                    <h2>
                        Sign Up <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                </Link>

                <Link
                    href="/login"
                    className={styles.card}
                >
                    <h2>
                        Log In <span>-&gt;</span>
                    </h2>
                    <p>Explore starter templates for Next.js.</p>
                </Link>
            </div>
        </main>
    );
}
