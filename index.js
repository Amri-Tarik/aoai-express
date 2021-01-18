const express = require("express");
const app = express();
var cors = require('cors')
const port = 3000;
const ID = "admin"

app.use(express.json())
app.use(cors())

let questions = [
			{question : "wach baghi tkoun micanician f 7yatek kamla f la graisse ou lwskh ou tkrfiss ?", answer : ["ah","ma validitch meca"] },
			{question : "mn nytk ?", answer : ["ah","ma validitch meca","ma3ert baghi ha lflous"] },
			{question : "wayli ?", answer : ["ah","ma validitch meca","td pls"] },
			{question : "ma mty9ch ?", answer : ["ah","validit meca"] },
			{question : "wach formatiti pc b 50 dh ?", answer : ["smiti baalla","non"] }
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
