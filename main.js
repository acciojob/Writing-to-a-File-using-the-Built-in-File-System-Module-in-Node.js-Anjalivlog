const fs = require('fs');

const message = "Hello, World!";
const fileName = "output.txt";

fs.writeFile(fileName, message, (err) => {
    if (err) {
      console.error("An error occurred while writing to the file:", err);
      throw err; 
    } else {
      console.log(`The message "${message}" was successfully written to ${fileName}`);
    }
  });

// TODO: Write the message "Hello, World!" to the file "output.txt"

