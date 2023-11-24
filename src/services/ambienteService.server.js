import { prisma } from "../secure/db.server";

// Pega todos ambientes de acordo com variável paraReserva (true || false)
export async function todosAmbientes(ambientePrivado) {
  return await prisma.ambiente.findMany({
    where: {
      ambiente_privado: ambientePrivado
    }
  })
}

export async function verificarDisponibilidadeAmbiente(id_espaco, data) {
  let existeReserva = await prisma.reserva.findFirst({
    where: {
      id_espaco: {
        equals: parseInt(id_espaco)
      },
      data: {
        equals: data,
      },
    },
    select: {
      id: true,
    },
  });
  
  return !!existeReserva
}

