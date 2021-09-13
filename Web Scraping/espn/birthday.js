const cheerio = require('cheerio');
const request = require('request');
const chalk = require('chalk');

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';

request(url,cb);
function cb(err,res,html){
    if(err){
        console.log(err);
    }
    else{
        extractHtml(html);
    }
}

function extractHtml(html){
    let selectorTool = cheerio.load(html);
    let allTables = selectorTool('.table tbody');
    for(let i=0; i<4; i++){
       let allRowsOfTable = selectorTool(allTables[i]).find('tr');
       for(let j=0; j<allRowsOfTable.length; j++){
           let link = selectorTool(allRowsOfTable[j]).find('a').attr('href');
           if(link){
               let fullLink = "https://www.espncricinfo.com" + link;
               getBirthday(fullLink);                
           }
       } 
    }

    // console.log(lbc);
}

function getBirthday(link){
    request(link,cb);
    function cb(err,res,html){
        if(err){
            console.log(err);
        }
        else{
            extractBirthdays(html);
        }
    }
}

function extractBirthdays(html){
    let selectorTool =  cheerio.load(html);
    let playerDetailsArray = selectorTool('.player-card-description.gray-900');
    let playerName = selectorTool(playerDetailsArray[0]).text();
    let dobArr = selectorTool(playerDetailsArray[1]).text().split(',');
    let dob = "";
    for(let k=0; k<2; k++){
        dob += dobArr[k]; 
    }
    console.log(chalk.green("Name of the Player - " + playerName));
    console.log(chalk.yellow("Date of Birth - " +dob ));
    console.log();
}