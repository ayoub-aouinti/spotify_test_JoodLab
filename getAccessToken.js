const https = require('https');
const querystring = require('querystring');

const clientId = 'd5e29f163f89438b967519fa908c42b3';
const clientSecret = 'd7c70c43989145e4963751d7d3497460';
const redirectUri = 'https://github.com/ayoub-aouinti/home-work';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

const scopes = ['user-library-read'];

// Step 1: Redirect user to Spotify authorization URL
const authorizationUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`;
console.log(`Please visit the following URL to authorize: ${authorizationUrl}`);

// In a real application, you would open the above URL in the user's browser.

// Step 2: Obtain authorization code from user input (manual entry for this example)
const authorizationCode = '...'; // Get the authorization code manually

// Step 3: Exchange authorization code for access token
const getToken = () => {
  const postData = querystring.stringify({
    grant_type: 'authorization_code',
    code: authorizationCode,
    redirect_uri: redirectUri,
  });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
  };

  const req = https.request(tokenEndpoint, options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      const tokenData = JSON.parse(data);
      console.log('Access Token:', tokenData.access_token);
    });
  });

  req.on('error', (error) => {
    console.error('Error fetching data from Spotify API:', error);
  });

  req.write(postData);
  req.end();
};

getToken();

