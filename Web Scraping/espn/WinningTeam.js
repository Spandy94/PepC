const cheerio = require('cheerio');
const request = require('request');

request("");

function requestCallback(err, res, html){
    const $ = cheerio.load(html);
    const losingTeam = $(".team-gray .name-link p").text();
    const bothTeams = $(".name-link p").map((data)  => {
        console.log($(data).text());
    });
}
