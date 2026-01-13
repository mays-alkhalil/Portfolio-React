import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import defaultContent from "./defaultContent";

const ContentContext = createContext(null);
const STORAGE_KEY = "portfolioContent";

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

  const value = useMemo(
    () => ({
      content,
      setContent,
      updateContent,
      resetContent,
    }),
    [content]
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
