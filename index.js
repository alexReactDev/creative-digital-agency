const express = require("express");
const path = require("path");

const app = express();
const port = 4502;

app.use(express.static(path.join(__dirname, "/dist")));

app.get("/", (req, res) => {
	return res.sendFile(path.join(__dirname, "/dist/index.html"));
})

app.listen(port, () => {
	console.log(`App started on port ${port}`);
})