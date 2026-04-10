"use client";
// Nota: Si dejaste tu carpeta como 'componentes', cambia la ruta aquí abajo
import { useLanguage } from "../components/LanguageContext"; 

export default function ContractorPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto p-6 w-full mt-8">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">{t.contractorTitle}</h1>
      <p className="text-slate-600 mb-8">{t.contractorSubtitle}</p>

      {/* Aquí empezaremos a conectar la lógica después */}
      <form className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200">
        
        {/* Dirección */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            {t.addressLabel}
          </label>
          <input 
            type="text" 
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition" 
            placeholder="123 Main St..." 
          />
        </div>

        {/* Datos del Contratista (En dos columnas en PC, una en móvil) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div>
             <label className="block text-sm font-semibold text-slate-700 mb-2">
               {t.nameLabel}
             </label>
             <input 
               type="text" 
               className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition" 
               placeholder="Juan Pérez" 
             />
           </div>
           <div>
             <label className="block text-sm font-semibold text-slate-700 mb-2">
               {t.phoneLabel}
             </label>
             <input 
               type="tel" 
               className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition" 
               placeholder="(555) 123-4567" 
             />
           </div>
        </div>

        {/* Cuadro de texto libre para el Presupuesto */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            {t.bidLabel}
          </label>
          <textarea
            rows={5}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none"
            placeholder={t.bidPlaceholder}
          ></textarea>
        </div>

        {/* Botones falsos (por ahora) de subida de archivos */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button type="button" className="flex-1 py-4 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 hover:border-emerald-400 hover:text-emerald-600 transition flex items-center justify-center gap-2 font-medium">
            📸 {t.uploadPhotos}
          </button>
          <button type="button" className="flex-1 py-4 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 hover:border-emerald-400 hover:text-emerald-600 transition flex items-center justify-center gap-2 font-medium">
            🎥 {t.uploadVideo}
          </button>
        </div>

        {/* Botón de Enviar */}
        <div className="pt-4">
          <button type="submit" className="w-full py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition shadow-md text-lg">
            {t.submitBid}
          </button>
        </div>
      </form>
    </div>
  );
}