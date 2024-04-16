import { jfs, rubik } from '@@@/src/ui/fonts'
import { getLocalText } from '@@@/src/lib/data';

export default async function Page({ params }: { params: { postId: string } }) {
    const postId = params['postId'];
    const postText = await getLocalText(postId);

    return (
        <div>
            <div className={rubik.className}>
                {postId} : postID
            </div>
            <div className={jfs.className}>{postText?.postText}</div>
        </div>
    )
}