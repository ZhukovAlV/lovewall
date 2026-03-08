export interface User {
    id: number;
    name: string;
    email: string;
    avatarUrl?: string;
    bio?: string;
}

export interface WallMessage {
    id: number;
    userId: number;
    text: string;
    createdAt: string;
    likes: number;
}

export interface AuthData {
    token: string;
}