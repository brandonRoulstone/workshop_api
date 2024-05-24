import { pool } from "../Config/configuration.js";

const getTickets = async () => {
    const [ tickets ] = await pool.query(
        `SELECT * FROM workshops`
    );
    return tickets;
}

const getTicket = async (venueId) => {
    const [ ticket ] = await pool.query(
        `SELECT * FROM workshops WHERE venueId = ?`,
        [venueId]
    );
    return ticket;
}

const bookTicket = async (venueId) => {
    const [ ticket ] = await pool.query(
        `SELECT * FROM bookedSeat WHERE venueId = ?`,
        [venueId]);

    if(ticket.length > 0){
        const updateSeats = ticket[0].expectedAttendance + 1;
        await pool.query(`
            UPDATE bookedSeat SET expectedAttendance = ?
            WHERE venueId = ?
        `, [updateSeats, venueId])
    } else {
        await pool.query(`
        INSERT INTO bookedSeat (venueId, expectedAttendance) VALUES (?, 1)
        `, [venueId])
    }
}

const bookSpot = async (seatId, venueId) => {
    await bookTicket(seatId, venueId)
}

export {
    getTickets,
    getTicket,
    bookSpot
}