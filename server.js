const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jsx");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine("jsx", require("express-react-views").createEngine());

require("./routes")(app);

app.listen(3000);
