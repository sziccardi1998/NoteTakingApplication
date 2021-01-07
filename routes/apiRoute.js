// load data if needed
var notes = require("../db/db.json");

// routing

module.exports = function(app) {
    // API GET Requests
    // Read db.json and reaturn all of the saved notes as JSON
    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });

    // API POST Requests
    // Should receive a new note to save on the request body, add it to the notes and trurn the new note to the client
    app.post("/api/notes", function(req, res) {
        
    });

    // API DELETE Requests
    // Should recieve an id of the note to delete. Read all notes in the note file and remove the note with the given id.
    app.delete("/api/notes/:id", function(req, res){

    });
}