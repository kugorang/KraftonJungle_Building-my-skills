import React, { Suspense } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { PostTableSkeleton } from '@@@/src/ui/skeletons';
import Table from '@@@/src/ui/forum/table';
import { Metadata } from 'next';
import { fetchRecentPostsInfo, getLocalData } from '@@@/src/lib/data';

export const metadata: Metadata = {
    title: 'Forum',
};

export default async function Page() {
    /* for tests */
    // const postsInfo = await fetchRecentPostsInfo('latests', currentPage) || people;

    return (
        <div className={styles.body}>
            <Suspense fallback={<PostTableSkeleton />}>
                <Table />
            </Suspense>
        </div>
    );
}
