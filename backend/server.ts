import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";
const api = express();
const app = Router();
//

const prisma = new PrismaClient();

app.use(express.json());

app.get("/hello", (req, res) => {
	res.send("hello");
});

app.get("/world", (req, res) => {
	res.send("world");
});

app.get("/prisma", async (req, res) => {
	const prismaRes = await prisma.collectionname.findMany();
	res.json(prismaRes);
});

app.post("/prisma", async (req, res) => {
	const requestBody = req.body;
	const prismaRes = await prisma.collectionname.create({
		data: requestBody
	});
	res.json(prismaRes);
});

//
api.use("/api", app);
api.listen(3000, () => {
	console.log("running on 3000");
});
