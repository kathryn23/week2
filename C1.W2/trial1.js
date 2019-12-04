
 
var year = require('readline');
 
var prompts = year.createInterface(process.stdin, process.stdout);
prompts.question("Enter year of birth?", 
                  
    function(year){
        var msg = "";
 
            if (year > 2000) {
                msg = "The user is a minor!";}

                else {
                    if ((year > 1983) && (year < 2000)){
                        msg = "The user is a youth!";}
                }

                    if (year < 1983) {
                    msg = "The User is an elder!"; }

 console.log(msg);
 process.exit();
                    });