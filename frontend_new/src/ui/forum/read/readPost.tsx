import { PostInfo } from '@@@/src/lib/definitions';
import Link from 'next/link'

export function ReadPost(
    { postId, postTitle }: { postId: PostInfo['postId'], postTitle: PostInfo['postTitle'] }) {
    return (
        <Link
            href={`/forum/read/${postId} `}
        >
            {postTitle}
        </Link>
    );
}