import React, { useEffect, useState } from "react";
import { fetchWall, createMessage } from "../api/wallApi";
import { WallMessage } from "../models";
import Header from "../components/Header";
import WallFeed from "../components/WallFeed";
import Loader from "../components/Loader";

const WallPage: React.FC = () => {
    const [messages, setMessages] = useState<WallMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const loadMessages = () => {
        setLoading(true);
        fetchWall()
            .then(setMessages)
            .finally(() => setLoading(false));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        setError("");
        try {
            await createMessage(text);
            setText("");
            loadMessages();
        } catch {
            setError("Ошибка публикации.");
        }
    };

    useEffect(loadMessages, []);

    return (
        <>
            <Header />
            <main>
                <h2>Стена</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Ваше сообщение"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button type="submit">Опубликовать</button>
                </form>
                {error && <div className="error">{error}</div>}
                {loading ? <Loader /> : <WallFeed messages={messages} />}
            </main>
        </>
    );
};
export default WallPage;
