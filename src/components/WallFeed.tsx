import React from "react";
import { WallMessage } from "../models";

type Props = { messages: WallMessage[] };

const WallFeed: React.FC<Props> = ({ messages }) => (
    <div>
        {messages.length === 0 && <p>Нет сообщений.</p>}
        <ul>
            {messages.map(msg => (
                <li key={msg.id}>
                    <strong>#{msg.id}</strong>: {msg.text} <em>({msg.likes} лайков)</em>
                </li>
            ))}
        </ul>
    </div>
);

export default WallFeed;
