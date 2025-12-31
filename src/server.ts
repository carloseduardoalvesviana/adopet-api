import app from "./app";

const PORTA = process.env || 3000;

app.listen(PORTA, () => {
	console.log(`Servidor executando em http://localhost:${PORTA}`);
});
