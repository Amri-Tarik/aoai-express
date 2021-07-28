const express = require("express");
const app = express();
var cors = require('cors')
const port = 3000;
const ID = "admin"

var corsOptions = {
  origin: 'https://int-aoai.netlify.app'
}

app.use(express.json())
app.use(cors(corsOptions))

let questions = [
			{question : "first question ?", answer : ["first answer","second answer"] },
			{question : "Second question ?", answer : ["first answer","second answer","third answer"] },
			{question : "third question ?", answer : ["first answer","second answer","third answer"] },
			{question : "fourth question ?", answer : ["first answer","second answer"] }
		]

app.post("/auth", (req, res) => {
	if(req.body.id.toLowerCase() == ID) {
		// retrive data from the database
		setTimeout(()=>{res.send({
			validation : "ok",
			gm : Math.floor(Math.random() * 100),
			gi : Math.floor(Math.random() * 100),
			ge : Math.floor(Math.random() * 100),
		})},1000)
	} else {
		res.send({validation : "la27"})
	}
});

app.post("/gm", (req, res) => {
	if(req.body.id.toLowerCase() == ID) {
		// retrive data from the database
		setTimeout(()=>{res.send({
			form : "ok",
			l : questions.length,
			list : questions,
		})},1000)
	} else {
		res.send({validation : "la27"})
	}
});

app.post("/gi", (req, res) => {
	if(req.body.id.toLowerCase() == ID) {
		// retrive data from the database
		setTimeout(()=>{res.send({
			form : "ok",
			l : questions.length,
			list : questions,
		})},1000)
	} else {
		res.send({validation : "la27"})
	}
});

app.post("/ge", (req, res) => {
	if(req.body.id.toLowerCase() == ID) {
		// retrive data from the database
		setTimeout(()=>{res.send({
			form : "ok",
			l : questions.length,
			list : questions,
		})},1000)
	} else {
		res.send({validation : "la27"})
	}
});

app.get("/", (req, res) => {
 	res.send("ok");
});

app.listen(port, () => {
  	console.log(`Example app listening at http://localhost:${port}`);
});
