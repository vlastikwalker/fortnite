const express = require('express');
const request = require('request');
process.env.TRN_API_KEY = '74d983c9-c539-4b8a-a64d-8f93f19b1108';

const app = express();
// // You can get your API key from https://fortnitetracker.com/site-api
// const trn_apiKey = config.TRN_API_KEY;
// // You can get your API key from https://fnbr.co/api/docs
// const fnbr_apiKey = config.FNBR_API_KEY;

app.get('/', (req, res) => res.send('/stats/{name} will get stats'));

// example.com/stats/{name} will get stats from Fornite Tracker API
app.get('/stats/:name', function(req, res) {
    // Fortnite player name
    let name = req.params.name;
    /*
        This will only work for PC platform
        You can implement this for other platforms as well
        Platforms: pc, xbl, psn
        https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}
    */
    let url = `https://api.fortnitetracker.com/v1/profile/pc/${name}`;
    // You need to pass your API key as a header with your requests
    let options = {
        uri: url,
        headers: {
            'TRN-Api-Key': process.env.TRN_API_KEY
        }
    };
    request(options, function(error, response, body) {
        if(error) {
            console.log('There is a problem with the Fortnite Tracker API.');
            return;
        }
        if(!error && response.statusCode === 200) {
            let info = JSON.parse(body);
            if(info.error) { console.log('Invalid Fortnite name.'); return; }
            /*
                You can get lifetime stats and/or season stats
                p2 -> Lifetime Solo Stats & curr_p2 -> Season Solo Stats
                p10 -> Lifetime Duo Stats & curr_p10 -> Season Duo Stats
                p9 -> Lifetime Squad Stats & curr_p9 -> Season Squad Stats
                You can get the stats like 'kills, kill/death ratio, wins, etc.
                example: info.stats.p2.top1.value -> This will get you lifetime solo wins
            */
            // Example variables
            let lifetimeSoloStats = info.stats.p2;
            let seasonSoloStats = info.stats.curr_p2;
            let lifetimeDuoStats = info.stats.p10;
            let seasonDuoStats = info.stats.curr_p10;
            let lifetimeSquadStats = info.stats.p9;
            let seasonSquadStats = info.stats.curr_p9;
            /*
                Passing data to view
                You can send these stats separately or just send the 'info' variable like this:
                res.render('pages/stats',
                {
                    lifetimeSoloStats = lifetimeSoloStats,
                    lifetimeDuoStats = lifetimeDuoStats,
                    lifetimeSquadStats = lifetimeSquadStats,
                    seasonSoloStats = seasonSoloStats,
                    seasonDuoStats = seasonDuoStats,
                    seasonSquadStats = seasonSquadStats
                });
            */
            // This will show parsed JSON. You can try 'body' instead of 'info'
            res.send(info);
        }
    })
});


app.listen(3000, () => console.log('App listening on port 3000'));