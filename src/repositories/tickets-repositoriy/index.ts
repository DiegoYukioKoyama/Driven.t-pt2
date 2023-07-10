import { prisma } from "@/config";
import { NewTicketType } from "@/protocols";
import { Ticket, TicketType } from "@prisma/client";

async function findAllTicketType(): Promise<TicketType[]> {
  return prisma.ticketType.findMany();
}

async function findTicketByUserId(userId: number): Promise<NewTicketType> {
    const ticket = await prisma.ticket.findFirst({
      where: {
        Enrollment: {
          userId: userId,
        },
      },
      include: {
        TicketType: true,
      },
    });
  
    if (!ticket) {
      return null;
    }
  
    const formattedTicket: NewTicketType = {
      id: ticket.id,
      status: ticket.status,
      ticketTypeId: ticket.ticketTypeId,
      enrollmentId: ticket.enrollmentId,
      TicketType: {
        id: ticket.TicketType.id,
        name: ticket.TicketType.name,
        price: ticket.TicketType.price,
        isRemote: ticket.TicketType.isRemote,
        includesHotel: ticket.TicketType.includesHotel,
        createdAt: ticket.TicketType.createdAt,
        updatedAt: ticket.TicketType.updatedAt,
      },
      createdAt: ticket.createdAt,
      updatedAt: ticket.updatedAt,
    };
  
    return formattedTicket;
  }
  

const ticketsRepository = {
  findAllTicketType,
  findTicketByUserId,
};

export default ticketsRepository;
