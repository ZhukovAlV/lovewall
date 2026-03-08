import React, { useEffect, useState } from "react";
import { getProfile } from "../api/userApi";
import { User } from "../models";
import Header from "../components/Header";
import Loader from "../components/Loader";

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProfile()
            .then(setUser)
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Header />
            <main>
                <h2>Профиль</h2>
                {loading && <Loader />}
                {user && (
                    <div>
                        <p><strong>Имя:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Bio:</strong> {user.bio || "-"}</p>
                    </div>
                )}
            </main>
        </>
    );
};
export default ProfilePage;
