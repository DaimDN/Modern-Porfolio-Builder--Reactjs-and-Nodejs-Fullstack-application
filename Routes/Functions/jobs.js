

const { raw } = require('express');
const https = require('https');
const config = require('config');

module.exports.jobs = async (req, res, next)=>{

    try {
        // Replace with access token for the r_liteprofile permission
            const accessToken = "";
            const options = {
            host: 'api.linkedin.com',
            path: '/v2/me',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'cache-control': 'no-cache',
                'X-Restli-Protocol-Version': '2.0.0'
            }
            };

            const profileRequest = https.request(options, function(response) {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                const profileData = JSON.parse(data);
                var rawdata = JSON.stringify(profileData, 0, 2);

                res.status(200).json(rawdata);
                console.log(rawdata);
            });
            });
            profileRequest.end();

        
    } catch (error) {
        res.status(500).json({msg: "Internal Server error"});

        
    }
}