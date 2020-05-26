const db = require('./models');
// Include prompt module.
var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        // The fist input text is assigned to username variable.
        name: 'name',
    },
    {
        // The second input text is assigned to password variable.
        year: 'year',
    },
    {
        // The second input text is assigned to password variable.
        artistID: 'artistID',
    }
];

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        console.log('Command-line received data:');
        console.log(result);
        db.Album.create({
            album_name: result.name,
            year: result.year,
            artistID: result.artistID
        })
        var message = `Album ${result.name}, year ${result.year} has been added to artist id ${result.id}`;

        // Display user input in console log.
        console.log(message);
    }
});