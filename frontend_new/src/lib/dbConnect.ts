import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'URI 설정 안됨';

if (MONGODB_URI === 'URI 설정 안됨') {
    throw new Error('몽고DB 환경변수를 .env 파일에 작성하세요');
}

/**
 * MongoDB 연결을 관리하는 함수
 */
async function dbConnect() {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    return mongoose.connect(MONGODB_URI);
}

export default dbConnect;