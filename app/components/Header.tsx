"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="w-full bg-slate-900 text-white p-4 shadow-md flex justify-between items-center">
      <Link href="/" className="text-xl font-bold hover:text-slate-300 transition">
        {t.headerTitle}
      </Link>
      
      <button
        onClick={toggleLang}
        className="px-4 py-2 bg-slate-700 rounded-md font-semibold hover:bg-slate-600 transition shadow-sm"
      >
        {lang === 'es' ? 'English' : 'Español'}
      </button>
    </header>
  );
}