import express from "express";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
    res.json({
        status: "ok",
        message: "Digital Marketplace API is running"
    });
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});