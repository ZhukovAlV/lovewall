import http from "../http";
import { User } from "../models";

export async function getProfile(): Promise<User> {
    const { data } = await http.get("/api/users/me");
    return data;
}

export async function getUserById(id: number): Promise<User> {
    const { data } = await http.get(`/api/users/${id}`);
    return data;
}
