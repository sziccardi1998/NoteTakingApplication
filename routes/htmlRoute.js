var path = require("path");

module.exports = function(app) {
    // /notes should return the notes.html file
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // * should return the index.html file
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })
};