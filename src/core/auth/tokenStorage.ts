const TOKEN_KEY = "gezenti_access_token";

function decodeJWT(token: string): any {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

function isTokenExpired(token: string): boolean {
  const decoded = decodeJWT(token);
  if (!decoded || !decoded.exp) {
    return true;
  }
  const expirationTime = decoded.exp * 1000;
  return Date.now() >= expirationTime;
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string | null {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    return null;
  }
  
  if (isTokenExpired(token)) {
    clearToken();
    return null;
  }
  
  return token;
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
