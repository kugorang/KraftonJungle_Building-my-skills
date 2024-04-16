import React, { Component } from 'react';
import { fetchRecentPostsInfo, getLocalData } from '@@@/src/lib/data';
import { formatDateToLocal } from '@@@/src/lib/utils';
import { PostInfo } from '@@@/src/lib/definitions';
import styles from './table.module.css'
import { ReadPost } from './read/readPost';

export default async function PostInfoTable() {

    // const postsInfo = await fetchRecentPostsInfo() || ' ';
    const { postsInfo } = await getLocalData();

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className={styles.th}>작성자</th>
                        <th className={styles.th}>글 내용</th>
                        <th className={styles.th}>postId</th>
                        <th className={styles.th}>좋아요</th>
                        <th className={styles.th}>작성 시간</th>
                    </tr>
                </thead>
                <tbody>
                    {postsInfo?.map((post) => (
                        <tr
                            key={post["postId"]} >
                            <td>
                                {post.writer["uid"]}
                            </td>
                            <td>
                                <ReadPost postId={post["postId"]} postTitle={post["postTitle"]} />
                            </td>
                            <td>
                                {post.postId}
                            </td>
                            <td>
                                {post.likes}
                            </td>
                            <td>
                                {formatDateToLocal(post.date)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
