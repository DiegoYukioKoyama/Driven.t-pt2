import { Response } from "express";
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import tickesService from "@/services/tickets-service";

export async function getAllTicketType(req:AuthenticatedRequest, res: Response){
    try {
        const allTicketsType = await tickesService.getAllTicketType();
        return res.status(httpStatus.OK).send(allTicketsType);
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function getTicketByUserId(req: AuthenticatedRequest, res: Response){
    const { userId } = req;

    try {
        const ticket = await tickesService.getTicket(userId);
        return res.status(httpStatus.OK).send(ticket)
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}