"use client"; // Le decimos a Next que este componente usa funciones del cliente (el hook del idioma)

import Link from "next/link";
import { useLanguage } from "./components/LanguageContext";

export default function Home() {
  // Extraemos la "t" (traducción) de nuestro contexto
  const { t } = useLanguage();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">{t.homeTitle}</h1>
      <p className="mb-8 text-slate-600">{t.homeSubtitle}</p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Botón para Spencer */}
        <Link 
          href="/owner" 
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-center shadow-lg"
        >
          {t.btnOwner}
        </Link>

        {/* Botón para el Contratista */}
        <Link 
          href="/contractor" 
          className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition text-center shadow-lg"
        >
          {t.btnContractor}
        </Link>
      </div>
    </div>
  );
}