import React, { useState } from "react";
import { register } from "../api/authApi";
import { setAuthToken } from "../auth";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader";

const RegisterPage: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const { token } = await register(name, email, password);
            setAuthToken(token);
            navigate("/wall");
        } catch (e) {
            setError("Ошибка регистрации.");
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <main>
                <h2>Регистрация</h2>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Имя"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <Button disabled={loading} type="submit">
                        {loading ? <Loader /> : "Зарегистрироваться"}
                    </Button>
                </form>
            </main>
        </>
    );
};

export default RegisterPage;
