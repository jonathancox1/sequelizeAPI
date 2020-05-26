const db = require('./models');

// Include prompt module.
var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        // The fist input text is assigned to username variable.
        name: 'name',
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
        console.log(result.name);
        console.log('Command-line received data:');

        // Get user input from result object.
        var message = `Artist: ${result.name} has been added`;

        db.Artist.create({
            artist_name: result.name
        })

        // Display user input in console log.
        console.log(message);
    }
});






























// // Get process.stdin as the standard input object.
// var standard_input = process.stdin;

// // Set input character encoding.
// standard_input.setEncoding('utf-8');

// // Prompt user to input data in console.
// console.log("Please input a new Artist");

// // When user input data and click enter key.
// standard_input.on('data', function (data) {

//     // User input exit.
//     if (data === 'exit\n') {
//         // Program exit.
//         console.log("User input complete, program exit.");
//         process.exit();
//     } else {
//         // Print user input in console.
//         console.log('User Input Artist Name : ' + data);
//         db.Artist.create({
//             artist_name: data
//         })
//     }
// });