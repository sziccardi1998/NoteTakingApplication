const express = require("express");

const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public", {
    extensions: ['html', 'js'],
}));

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
  