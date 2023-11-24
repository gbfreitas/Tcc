import { prisma } from '../secure/db.server';

// Pega todos ambientes de acordo com variável paraReserva (true || false)
export async function todasReservas(usuarioId) {
  let reservas = [];
  try {
    reservas = await prisma.reserva.findMany({
      where: {
        id_morador: usuarioId,
        data: {
          gte: new Date(),
        },
      },
      include: {
        Ambiente: true,
      },
    });
  } catch (e) {
    console.log(e);
  }

  return reservas.map((reserva) => {
    reserva.data.setHours(reserva.data.getHours() + 3);
    reserva.data = reserva.data.toLocaleDateString();

    return reserva;
  });
}

export async function novaReserva(reserva) {
  return await prisma.reserva.create({
    data: {
      id_espaco: parseInt(reserva.id_espaco),
      id_morador: parseInt(reserva.id_morador),
      data: reserva.data,
    },
  });
}

export async function excluirReserva(reservaId) {
  return await prisma.reserva.delete({
    where: {
      id: parseInt(reservaId)
    }
  })
}
