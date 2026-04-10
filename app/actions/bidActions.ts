"use server"; // Esta directiva le dice a Next.js que este código NUNCA va al cliente

import prisma from "../../lib/prisma"; // Ajusta la ruta si 'lib' está en otro lado

export async function createBidRequest(propertyAddress: string, contractorEmail: string) {
  try {
    // 1. Primero, verificamos si el proyecto (propiedad) ya existe. 
    // Si no, lo creamos de forma rápida.
    let project = await prisma.project.findFirst({
      where: { address: propertyAddress },
    });

    if (!project) {
      project = await prisma.project.create({
        data: {
          address: propertyAddress,
          // Puedes agregar ownerEmail y ownerName si ya los tienes en un contexto global o sesión
        },
      });
    }

    // 2. Creamos la nueva petición de Bid (BidRequest)
    const newBidRequest = await prisma.bidRequest.create({
      data: {
        projectId: project.id,
        contractorEmail: contractorEmail,
        status: "PENDING",
      },
    });

    // 3. Devolvemos el ID único (UUID) que generó Prisma
    return { success: true, id: newBidRequest.id };
    
  } catch (error) {
    console.error("Error creando el BidRequest:", error);
    return { success: false, error: "Hubo un error al generar la petición." };
  }
}