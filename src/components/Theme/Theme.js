import React from "react";
import { useSelector } from "react-redux";

export default function Theme({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-neutral-600 dark:text-neutral-200 dark:bg-slate-600 min-h-screen">
        {children}
      </div>
    </div>
  );
}
