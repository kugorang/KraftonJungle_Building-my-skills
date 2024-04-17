import styles from './skeletons.module.css'

// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function PostRowSkeleton() {
    return (
        <div className={`${shimmer}`}>
            <tr>
                <td>
                    <div></div>
                </td>
                <td>
                    <div></div>
                </td>
                <td>
                    <div></div>
                </td>
                <td>
                    <div></div>
                </td>
                <td>
                    <div>
                        <div>
                        </div>
                        <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
                    </div>
                </td>
            </tr>
        </div>
    );
}

export function PostTableSkeleton() {
    return (
        <div className={styles.sk}>
            <table className={styles.sk}>
                <thead className={styles.sk}>
                    <tr>
                        <th className={styles.sk}>TableSk</th>
                        <th className={styles.sk}>TableSk</th>
                        <th className={styles.sk}>TableSk</th>
                        <th className={styles.sk}>TableSk</th>
                        <th className={styles.sk}>TableSk</th>
                    </tr>
                </thead>
                <tbody className={styles.sk}>
                    <PostRowSkeleton />
                    <PostRowSkeleton />
                    <PostRowSkeleton />
                    <PostRowSkeleton />
                    <PostRowSkeleton />
                    <PostRowSkeleton />
                </tbody>
            </table>
        </div>
    );
}

