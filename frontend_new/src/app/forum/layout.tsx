import styles from './layout.module.css'
import React from 'react';
import { rubik } from '@@@/src/ui/fonts'
import Button from '@@@/src/ui/button'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <div className={styles.one}>
                <Link href='/'>
                    <h1 className={`${rubik.className} ${styles.header1}`}>
                        FORUM
                    </h1>
                </Link>
            </div>
            <div className={styles.headingUnder}>
                This Is For Tests
            </div>
            <div className={styles.container}>
                <div className={`${styles.content}`}>
                    {children}
                </div>
                <div className={`${styles.sideNav} ${styles.sideNavMd}`}>
                    <AddPostButton />
                </div>
            </div>
        </main>
    );
}

function AddPostButton() {
    return (
        <Link href='/forum/write'>
            <Button>
                Add Post
            </Button>
        </Link>
    )
}
