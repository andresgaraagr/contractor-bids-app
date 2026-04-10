"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { dictionary, Language } from "./DiccionarioES-EN";

// Definimos qué datos va a guardar nuestro controlador
type LangContextType = {
  lang: Language;
  toggleLang: () => void;
  t: typeof dictionary.es; // 't' es de "translation", para usarlo rápido en el código
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Empezamos en inglés por defecto
  const [lang, setLang] = useState<Language>('en'); 

  // Función para cambiar de idioma
  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // Extraemos el diccionario del idioma actual
  const t = dictionary[lang];

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

// Hook personalizado para usarlo fácilmente en otros archivos
export const useLanguage = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  return context;
};