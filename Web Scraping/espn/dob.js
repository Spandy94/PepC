const request = require('request');
const cheerio = require('cheerio');

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard");

function requestCallback(err, res, html){
    const $ = cheerio.load(html);
    const batsmanAnchorTags = $(".batsman-cell a");
    let batsmanProfileUrls = [];
    for(let i=0; i<batsmanAnchorTags.length; i++){
        batsmanProfileUrls.push({
            name: $(batsmanAnchorTags[i]).text(),
            url: "https://www.espncricinfo.com" + $(batsmanAnchorTags[i]).attr("href")
        })
    }
    console.log(batsmanProfileUrls);
}
