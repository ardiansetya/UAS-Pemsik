import express from "express";
import { configDotenv } from "dotenv";
import authRouter from "./auth/auth.controller.js"
import bencanaRouter from "./bencana/bencana.controller.js"
import cors from "cors"

configDotenv();



const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Ganti dengan URL frontend Anda
    methods: ["GET", "POST", "PUT", "DELETE"], // Metode HTTP yang diizinkan
    allowedHeaders: ["Content-Type", "Authorization"], // Header yang diizinkan
}));

// Endpoint root
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api', authRouter);
app.use('/api', bencanaRouter);

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
