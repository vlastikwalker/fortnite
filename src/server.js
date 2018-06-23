const fetch = require('node-fetch');

async function fetchFortnite() {
    let platform = 'pc';
    let epicNickname = 'beastlyragee';
    const url = `https://api.fortnitetracker.com/v1/profile/${platform}/${epicNickname}`;
    const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'TRN-Api-Key': process.env.TRN_API_KEY
        }
    });
    const json = await response.json();
    console.log(json);
}

(async function () {
    await fetchFortnite()

})();