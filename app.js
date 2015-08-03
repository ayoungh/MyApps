//requires
var fs = require('fs');

//vars
var filesArr = [];
var path = '/Applications';


//go through the dir
fs.readdir(path, function(err, files) {
    files.filter(function(file) {
      //only .app files
      //if (file.substr(-4) === '.app')
        //push the file to array
        filesArr.push(file);
    });

    console.log(filesArr);
    //use the function to save to file
    saveFilelist(filesArr);

});

function saveFilelist(fileArray) {
    if (fileArray) {
        // do something
        fs.writeFile("./myApps.txt", fileArray.join('\n'), function(err) {
          if(err) {
              return console.log(err);
          }

            console.log("The file was saved!");
        });
    }
};
