// load data if needed
const fs = require("fs");
let noteData = [];
// routing

module.exports = function(app) {
    // API GET Requests
    // Read db.json and reaturn all of the saved notes as JSON
    app.get("/api/notes", function(req, res) {
        noteData = fs.readFileSync("./db/db.json", {encoding: "utf8",});
        noteData = JSON.parse(noteData);
        res.json(noteData);
    });

    // API POST Requests
    // Should receive a new note to save on the request body, add it to the notes and trurn the new note to the client
    app.post("/api/notes", function(req, res) {
        // read the file
        noteData = fs.readFileSync("./db/db.json", {encoding: "utf8",});
        console.log(noteData);
        // parse the data to get an array of objects
        noteData = JSON.parse(noteData);
        // set new notes id
        for(let i = 0; i < noteData.length; i++) {
            noteData[i].id = i+1;
        }
        req.body.id = noteData.length+1;
        // add the new note to the array of note objects
        noteData.push(req.body);
        // change to a string
        noteData = JSON.stringify(noteData);
        // write the new note to the file
        fs.writeFile("./db/db.json", noteData, "utf8", function(err) {
            if (err) throw err;
        });
        res.json(JSON.parse(noteData));
    });

    // API DELETE Requests
    // Should recieve an id of the note to delete. Read all notes in the note file and remove the note with the given id.
    app.delete("/api/notes/:id", function(req, res){
        // read in file
        noteData = fs.readFileSync("./db/db.json", {encoding: "utf8",});
        // convert data to array of objects
        noteData = JSON.parse(noteData);
        // check id of note to remove
        console.log(req.params.id);
        noteData = noteData.filter(note => note.id != req.params.id);
        // make array into string
        noteData = JSON.stringify(noteData);
        // write notes back to file
        fs.writeFile("./db/db.json", noteData, "utf8", function(err) {
            if (err) throw err;
        });
        res.json(JSON.parse(noteData));
    });
}