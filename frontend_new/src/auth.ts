import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@@@/src/lib/definitions';
import { getUserDB } from '@@@/src/lib/data';

const DB = getUserDB();

// uid에 해당하는 사용자를 DB에서 찾아 반환합니다.
async function getUser(uid: string): Promise<User | undefined> {
    try {
        const user = DB.find(user => user.uid === uid);
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ uid: z.string(), password: z.string() })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { uid, password } = parsedCredentials.data;
                    // getUser 함수를 사용하여 사용자 검색
                    const user = await getUser(uid);
                    console.log('사용자는 있네요');
                    console.log(user);

                    if (!user) return null;

                    // 간단한 문자열 비교로 비밀번호 일치 여부 확인
                    if (user.password === password) {
                        console.log('Login successful');
                        return { id: user.uid, ...user };
                    }
                }

                console.log('Invalid credentials in NextAuth');
                return null;
            },
        }),
    ],
});