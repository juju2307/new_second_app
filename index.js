const express = require("express");
const bodyParser = require("body-parser");
const { Mongoose } = require("mongoose");


const app = express();

app.use(bodyParser.json());


require("./models/Pet")(app);
require("./routes/petRoutes")(app);

Mongoose.connect("mongodb+srv://juju2307:<password>@cluster0.pbo6y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running`);
});