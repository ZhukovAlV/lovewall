import React from "react";
import { isLoggedIn, logout } from "../auth";

const Header: React.FC = () => (
    <header className="header">
        <h1>LoveWall</h1>
        <nav>
            {isLoggedIn() ? (
                <>
                    <a href="/profile">Профиль</a>
                    <a href="/wall">Стена</a>
                    <button onClick={logout}>Выйти</button>
                </>
            ) : (
                <>
                    <a href="/login">Войти</a>
                </>
            )}
        </nav>
    </header>
);

export default Header;
