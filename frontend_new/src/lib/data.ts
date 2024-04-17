import mongoose from 'mongoose';
import { PublicUser, PostInfo } from './definitions';
import { User } from './definitions'

const ITEMS_PER_PAGE = 6;
const postsInfo = [
    { writer: { uid: 'HHHDD' }, postTitle: 'Hello', postId: "12315", likes: '13', date: '2020/11/04' },
    { writer: { uid: 'FDHJF' }, postTitle: 'World', postId: "345", likes: '11', date: '2021/05/12' },
    { writer: { uid: 'shsh' }, postTitle: 'Goo9le', postId: "4235625", likes: '73', date: '2024/01/13' },
    { writer: { uid: 'DDDD' }, postTitle: 'Test', postId: "543565", likes: '88', date: '2022/04/16' },
];

const postsText = [
    { postId: '12315', postText: '이 글의 postId는 12315이며, 이 텍스트는 postId 12315의 본문 입니다.' },
    { postId: '345', postText: '이 글의 postId는 345이며, 이 텍스트는 postId 345의 본문 입니다.' },
    { postId: '4235625', postText: '이 글의 postId는 4235625이며, 이 텍스트는 postId 345의 본문 입니다.' },
    { postId: '543565', postText: '이 글의 postId는 543565이며, 이 텍스트는 postId 543565의 본문 입니다. 이 글은 영국에서 시작되었으며...' },
];

const userData: User[] = [
    { uid: 'hello', password: 'world' },
    { uid: 'react', password: 'next' }
]

export async function getLocalData() {

    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        console.log('Fetching test data...');
        await new Promise((resolve) => setTimeout(resolve, 3000));

        console.log('Data fetch completed after 3 seconds.');

        return { postsInfo };
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch test data.');
    }
}

export async function getLocalText(pid: PostInfo['postId']) {

    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        console.log('Fetching test data...');
        await new Promise((resolve) => setTimeout(resolve, 3000));

        console.log('Data fetch completed after 3 seconds.');

        return postsText.find(pst => pst.postId === pid);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch test data.');
    }
}

export function getUserDB() {
    return userData;
}

export async function fetchRecentPostsInfo(query = '', currentPage = 1) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const responses = await fetch(`/api/posts?query=${encodeURIComponent(query)}&limit=${ITEMS_PER_PAGE}&offset=${offset}`,
            { method: 'GET' });

        if (!responses.ok) {
            throw new Error("서버로부터 응답받기 실패");
        }

        const data = await responses.json();

        return data;

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('포스트 정보를 찾을 수 없습니다.');
    }
}

export async function fetchPostText(_id: User['uid']) {
    try {
        const data = await fetch(`/api/posts/${_id}`);

        if (data) {
            console.log(data);
            return data;
        } else {
            console.log("해당하는 포스트를 찾을 수 없습니다.");
            return null;
        }
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('포스트 내용을 불러오는데 실패했습니다.');
    }
}
