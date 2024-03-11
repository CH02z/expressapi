import express, { Request, Response } from 'express'
import http from "http"
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'


const app = express();
const port = 3000; // You can change this to any port number you prefer

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route to test the server
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, woooold!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});