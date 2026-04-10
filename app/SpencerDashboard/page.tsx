"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../components/LanguageContext";
import { createBidRequest } from "../actions/bidActions"; // Importamos la Server Action

export default function DashboardPage() {
  const { t } = useLanguage();
  const [property, setProperty] = useState("");
  const [email, setEmail] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Estado para saber si está cargando

  const handleGenerateBid = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Llamamos a la base de datos
      const result = await createBidRequest(property, email);

      if (result.success && result.id) {
        const baseUrl = window.location.origin;
        setGeneratedUrl(`${baseUrl}/bids/${result.id}`); // Usamos el ID real de Postgres
        setProperty(""); // Limpiamos el formulario
        setEmail("");
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Hubo un problema de conexión.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedUrl) {
      navigator.clipboard.writeText(generatedUrl);
      alert(t.dashboardAlertCopied);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">{t.dashboardTitle}</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          {t.dashboardBack}
        </Link>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-slate-700">{t.dashboardSubtitle}</h2>
        
        <form onSubmit={handleGenerateBid} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              {t.dashboardPropLabel}
            </label>
            <input
              type="text"
              required
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              placeholder={t.dashboardPropPlaceholder}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              {t.dashboardEmailLabel}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.dashboardEmailPlaceholder}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 font-semibold rounded-lg transition text-white ${
              isLoading ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Generando..." : t.dashboardBtnGenerate}
          </button>
        </form>
      </div>

      {/* Sección donde aparece el enlace generado */}
      {generatedUrl && (
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">{t.dashboardSuccessTitle}</h3>
          <p className="text-emerald-700 text-sm mb-4">
            {t.dashboardSuccessText}
          </p>
          
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={generatedUrl}
              className="flex-1 p-3 border border-emerald-300 rounded-lg bg-white text-slate-600 outline-none"
            />
            <button
              onClick={handleCopy}
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
            >
              {t.dashboardBtnCopy}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}