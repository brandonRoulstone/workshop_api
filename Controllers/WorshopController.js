import { getTickets, getTicket, bookSpot } from '../Model/db.js';

export default {
    allTickets : async (req, res) => {
        try {
            res.send(await getTickets())  
        } catch (error) {
            res.status(404).json({
                msg: error
            });
        }
    },
    selectTicketByID: async (req, res) => {
        try {
            const id = +req.params.id;
            res.send(await getTicket(id))
        } catch (error) {
            res.status(404).json({
                msg: error
            });
        }
    },
    bookTicketByID: async (req, res) => {
        try {
            let { expectedAttendance } = req.body;
            await bookSpot(+req.params.id);
            res.send({
                msg: "Successfully booked your spot!"
            });
        } catch (error) {
            res.status(404).json({
                msg: error
            });
        }
    }
}