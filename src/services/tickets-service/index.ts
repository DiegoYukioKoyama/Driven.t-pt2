import ticketsRepository from "@/repositories/tickets-repositoriy";
import { Ticket, TicketType } from "@prisma/client";
import { notFoundError } from "@/errors";
import { NewTicketType } from "@/protocols";


async function getAllTicketType(): Promise<TicketType[]>{
    const result = await ticketsRepository.findAllTicketType();
    
    if(!result) throw notFoundError();

    return result || [];
}

async function getTicket(userId: number): Promise<NewTicketType> {
    const result = await ticketsRepository.findTicketByUserId(userId);

    if(!result) throw notFoundError();

    return result;
}

const tickesService = {
    getAllTicketType,
    getTicket,
}

export default tickesService;