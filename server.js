import { config } from 'dotenv';
// allows me to access my env variables
config();
import cors from 'cors';
// initialize express server
import express from 'express';
import workshopRoute from "./Routes/workshopRoute.js"

const app = express();
const PORT = process.env.MYSQL_ADDON_PORT;

app.use(express.static('./Static'));
app.use(cors({
    origin: 'http://localhost:8080', // reminder update this to https://sharenet-theta.vercel.app/
    credentials: true
}))

app.use(express.json());

app.use('/workshops', workshopRoute)

app.listen(PORT, console.log(`port is running on http://localhost:${PORT}`));
 