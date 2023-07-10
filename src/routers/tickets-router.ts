import { Router } from "express";
import { getAllTicketType, getTicketByUserId } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const tickesRouter = Router();

tickesRouter
    .all('/*', authenticateToken)
    .get('/tickets/types', getAllTicketType)
    .get('/tickets', getTicketByUserId);
export { tickesRouter };