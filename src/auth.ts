export function setAuthToken(token: string) {
    localStorage.setItem("token", token);
}

export function getAuthToken(): string | null {
    return localStorage.getItem("token");
}

export function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
}

export function isLoggedIn(): boolean {
    return !!getAuthToken();
}
