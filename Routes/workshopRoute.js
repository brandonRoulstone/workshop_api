import express from "express";
import controllers from '../Controllers/WorshopController.js'

const router = express.Router()

router.route('/')
    .get(controllers.allTickets)


router.route('/:id')
    .get(controllers.selectTicketByID)
    .post(controllers.bookTicketByID)


export default router;