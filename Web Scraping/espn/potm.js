const cheerio = require('cheerio');
const request = require('request');
// const fs = require('fs');

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score");


function requestCallback(err, res, html){
    // console.log(html);
    const $ = cheerio.load(html);
    console.log($(".playerofthematch-name").length);
    console.log($($(".playerofthematch-player-detail")[1]).html());
    // fs.writeFileSync("temp.html",html);
}

