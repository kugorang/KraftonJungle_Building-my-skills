'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { generatePagination } from '@@@/src/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './pagination.module.css'

export default function Pagination() {

    return (
        <div className={styles.pagination}></div>
    );
}

function PaginationNumber({
    page,
    href,
    isActive,
    position,
}: {
    page: number | string;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
}) {
    let className = `${styles.flex}`;

    if (position === 'first' || position === 'single') {
        className += `${styles.roundedLmd} `;
    }

    if (position === 'last' || position === 'single') {
        className += `${styles.roundedRmd} `;
    }

    if (isActive) {
        className += `${styles.active} `;
    } else {
        if (position !== 'middle') {
            className += `${styles.hoverable} `;
        } else {
            className += `${styles.middle} `;
        }
    }

    return isActive || position === 'middle' ? (
        <div className={className}>{page}</div>
    ) : (
        <Link href={href} className={className}>
            {page}
        </Link>
    );
}
