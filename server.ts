import express, { Router } from "express";
const api = express();
const app = Router();
//

app.get("/hello", (req, res) => {
	res.send("hello");
});

app.get("/world", (req, res) => {
	res.send("world");
});

//
api.use("/api", app);
api.listen(3000, () => {
	console.log("running on 3000");
});
