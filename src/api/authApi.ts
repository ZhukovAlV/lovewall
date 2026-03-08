import http from "../http";
import { AuthData } from "../models";

export async function login(email: string, password: string): Promise<AuthData> {
    const { data } = await http.post("/api/auth/login", { email, password });
    return data;
}

export async function register(name: string, email: string, password: string): Promise<AuthData> {
    const { data } = await http.post("/api/auth/register", { name, email, password });
    return data;
}
