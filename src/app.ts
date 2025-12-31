import express from "express";
import petRouter from "./routes/pets";

const app = express();
app.use(express.json());
app.use(petRouter);

app.get("/", (_, res) => {
	res.send("Bem vindo ao curso de TypeScript!");
});

export default app;
