// 당신 데이터에 관한 타입정의
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
    uid: string;
    password: string;
};

// User 타입에서 password를 제외한 PublicUser 타입 정의
export type PublicUser = Omit<User, 'password'>;

export type PostInfo = {
    writer: PublicUser;
    postTitle: string;
    postId: string;
    likes: number;
    date: string;
};
