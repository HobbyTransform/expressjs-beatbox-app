// create an express app
const express = require("express");
const app = express();


//--------------------- Middleware ------------------------
app.use('/', express.static('static'));
//---------------------------------------------------------

app.get("/status", function (req, res) {
  res.send("<h1>Success!</h1>")
})

// start the server listening for requests
var server = app.listen(process.env.PORT || 3000, () => {
	console.log("App now running ...");
});
