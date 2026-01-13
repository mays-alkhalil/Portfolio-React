import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import defaultContent from "./defaultContent";

const ContentContext = createContext(null);
const STORAGE_KEY = "portfolioContent";
const LANGUAGE_KEY = "portfolioLanguage";
const THEME_KEY = "theme";
const DEFAULT_LANGUAGE = "ar";
const DEFAULT_THEME = "light";

const isLocalizedObject = (value) =>
  value && typeof value === "object" && ("ar" in value || "en" in value);

const mergeDeep = (target, source) => {
  if (typeof source !== "object" || source === null) {
    return target;
  }

  const output = Array.isArray(target) ? [...target] : { ...target };

  Object.keys(source).forEach((key) => {
    const targetValue = target ? target[key] : undefined;
    const sourceValue = source[key];

    if (Array.isArray(sourceValue)) {
      output[key] = sourceValue;
      return;
    }

    if (typeof sourceValue === "object" && sourceValue !== null) {
      output[key] = mergeDeep(targetValue || {}, sourceValue);
      return;
    }

    output[key] = sourceValue;
  });

  return output;
};

const cloneContent = (value) => {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
};

export const ContentProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LANGUAGE;
    }
    return window.localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;
  });
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_THEME;
    }
    return window.localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  });
  const [content, setContent] = useState(() => {
    if (typeof window === "undefined") {
      return defaultContent;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return defaultContent;
    }

    try {
      const parsed = JSON.parse(stored);
      return mergeDeep(defaultContent, parsed);
    } catch (error) {
      return defaultContent;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
  }, [language]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    document.body.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const updateContent = (path, value) => {
    setContent((prev) => {
      const next = cloneContent(prev);
      const keys = Array.isArray(path) ? path : path.split(".");
      let current = next;

      keys.slice(0, -1).forEach((key) => {
        current[key] = current[key] ?? {};
        current = current[key];
      });

      const lastKey = keys[keys.length - 1];
      current[lastKey] = value;
      return next;
    });
  };

  const resetContent = () => {
    setContent(defaultContent);
  };

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const getLocalized = useCallback(
    (value) => {
      if (!isLocalizedObject(value)) {
        return value;
      }
      return value[language] ?? value.en ?? value.ar ?? "";
    },
    [language]
  );

  const getSectionStyle = useCallback(
    (key) => {
      const lightStyle = content.sectionStyles?.[key] || {};
      const darkStyle = content.sectionStylesDark?.[key] || {};
      if (theme === "dark") {
        return { ...lightStyle, ...darkStyle };
      }
      return lightStyle;
    },
    [content.sectionStyles, content.sectionStylesDark, theme]
  );

  const value = useMemo(
    () => ({
      content,
      setContent,
      updateContent,
      resetContent,
      language,
      setLanguage,
      toggleLanguage,
      getLocalized,
      theme,
      setTheme,
      toggleTheme,
      getSectionStyle,
    }),
    [
      content,
      language,
      theme,
      getLocalized,
      toggleLanguage,
      toggleTheme,
      getSectionStyle,
    ]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
