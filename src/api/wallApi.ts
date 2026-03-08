import http from "../http";
import { WallMessage } from "../models";

export async function fetchWall(): Promise<WallMessage[]> {
    const { data } = await http.get("/api/wall/public");
    return data;
}

export async function createMessage(text: string): Promise<WallMessage> {
    const { data } = await http.post("/api/wall", { text });
    return data;
}
