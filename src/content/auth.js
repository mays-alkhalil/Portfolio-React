const AUTH_STORAGE_KEY = "dashboardAuth";
const AUTH_EMAIL = "admin@portfolio.local";
const AUTH_PASSWORD = "Portfolio@2024";

export const login = (email, password) => {
  const isValid = email === AUTH_EMAIL && password === AUTH_PASSWORD;
  if (typeof window !== "undefined") {
    if (isValid) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, "true");
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }
  return isValid;
};

export const logout = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return window.localStorage.getItem(AUTH_STORAGE_KEY) === "true";
};

export const authInfo = {
  email: AUTH_EMAIL,
};
