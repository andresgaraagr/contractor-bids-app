export const dictionary = {
  es: {
    // Textos generales
    headerTitle: "Sistema de Cotizaciones",
    // Textos del Inicio (Home)
    homeTitle: "Plataforma de Cotizaciones",
    homeSubtitle: "Selecciona tu rol para continuar",
    btnOwner: "Soy Dueño",
    btnContractor: "Soy Contratista",

    // Nuevos textos para la vista del Contratista
    contractorTitle: "Nueva Cotización",
    contractorSubtitle: "Ingresa los detalles del trabajo y sube la evidencia",
    addressLabel: "Dirección de la Propiedad",
    nameLabel: "Tu Nombre (o Compañía)",
    phoneLabel: "Tu Teléfono",
    bidLabel: "Descripción y Presupuesto",
    bidPlaceholder: "Ej: Voy a reparar el techo. El material cuesta $500 y la mano de obra $300. Estará listo en 3 días...",
    uploadPhotos: "Subir Fotos",
    uploadVideo: "Subir Video",
    submitBid: "Enviar Cotización"
  },
  en: {
    // General texts
    headerTitle: "Bidding System",
    // Home texts
    homeTitle: "Bidding Platform",
    homeSubtitle: "Select your role to continue",
    btnOwner: "I am the Owner",
    btnContractor: "I am a Contractor",
    // New texts for Contractor view
    contractorTitle: "New Bid",
    contractorSubtitle: "Enter the job details and upload evidence",
    addressLabel: "Property Address",
    nameLabel: "Your Name (or Company)",
    phoneLabel: "Your Phone",
    bidLabel: "Description & Quote",
    bidPlaceholder: "Ex: I will fix the roof. Materials are $500 and labor is $300. It will be done in 3 days...",
    uploadPhotos: "Upload Photos",
    uploadVideo: "Upload Video",
    submitBid: "Submit Bid"
  }
};

// Esto nos ayuda a que TypeScript sepa que solo hay dos idiomas
export type Language = 'es' | 'en';