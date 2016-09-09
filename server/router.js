var router = require('express').Router();
var jobController = require('./models/jobController.js')
var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

router.get('/listing', jobController.getAll);
router.get('/archive', jobController.getAllArchive);
router.post("/listing", jobController.addOne);
router.delete("/listing", jobController.deleteOne);
router.put("/listing", jobController.updateOne);
router.post("/archive", jobController.archiveOne);
// router.get('https://accounts.google.com/o/oauth2/auth', function(){
//   // If modifying these scopes, delete your previously saved credentials
//   // at ~/.credentials/drive-nodejs-quickstart.json
//   var SCOPES = ['https://www.googleapis.com/auth/drive',
//                 'https://www.googleapis.com/auth/calendar'
//                 ];
//   var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
//       process.env.USERPROFILE) + '/.credentials/';
//   var TOKEN_PATH = TOKEN_DIR + 'gitHired.json';
//   //this creates the value of the cookie on the client side
//   //local storage

//   // Load client secrets from a local file.
//   fs.readFile('./server/client_secret.json', function processClientSecrets(err, content) {
//     if (err) {
//       console.log('Error loading client secret file: ' + err);
//       return;
//     }
//     // Authorize a client with the loaded credentials, then call the
//     // Drive API.
//     authorize(JSON.parse(content), listFiles);
//   });

//   /**
//    * Create an OAuth2 client with the given credentials, and then execute the
//    * given callback function.
//    *
//    * @param {Object} credentials The authorization client credentials.
//    * @param {function} callback The callback to call with the authorized client.
//    */
//   function authorize(credentials, callback) {
//     var clientSecret = credentials.installed.client_secret;
//     var clientId = credentials.installed.client_id;
//     var redirectUrl = credentials.installed.redirect_uris[0];
//     var auth = new googleAuth();
//     var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

//     // Check if we have previously stored a token.
//     fs.readFile(TOKEN_PATH, function(err, token) {
//       if (err) {
//         getNewToken(oauth2Client, callback);
//       } else {
//         oauth2Client.credentials = JSON.parse(token);
//         callback(oauth2Client);
//       }
//     });
//   }

//   /**
//    * Get and store new token after prompting for user authorization, and then
//    * execute the given callback with the authorized OAuth2 client.
//    *
//    * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
//    * @param {getEventsCallback} callback The callback to call with the authorized
//    *     client.
//    */
//   function getNewToken(oauth2Client, callback) {
//     var authUrl = oauth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: SCOPES
//     });
//     console.log('Authorize this app by visiting this url: ', authUrl);
//     var rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });
//     rl.question('Enter the code from that page here: ', function(code) {
//       rl.close();
//       oauth2Client.getToken(code, function(err, token) {
//         if (err) {
//           console.log('Error while trying to retrieve access token', err);
//           return;
//         }
//         oauth2Client.credentials = token;
//         storeToken(token);
//         callback(oauth2Client);
//       });
//     });
//   }

//   /**
//    * Store token to disk be used in later program executions.
//    *
//    * @param {Object} token The token to store to disk.
//    */
//   function storeToken(token) {
//     try {
//       fs.mkdirSync(TOKEN_DIR);
//     } catch (err) {
//       if (err.code != 'EEXIST') {
//         throw err;
//       }
//     }
//     fs.writeFile(TOKEN_PATH, JSON.stringify(token));
//     console.log('Token stored to ' + TOKEN_PATH);
//   }

//   /**
//    * Lists the names and IDs of up to 10 files.
//    *
//    * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
//    */
//   function listFiles(auth) {
//     var service = google.drive('v3');
//     service.files.list({
//       auth: auth,
//       pageSize: 10,
//       fields: "nextPageToken, files(id, name)"
//     }, function(err, response) {
//       if (err) {
//         console.log('The API returned an error: ' + err);
//         return;
//       }
//       var files = response.files;
//       if (files.length == 0) {
//         console.log('No files found.');
//       } else {
//         console.log('Files:');
//         for (var i = 0; i < files.length; i++) {
//           var file = files[i];
//           console.log('%s (%s)', file.name, file.id);
//         }
//       }
//     });
//   }

//   function listEvents(auth) {
//    var calendar = google.calendar('v3');
//    calendar.events.list({
//      auth: auth,
//      calendarId: 'primary',
//      timeMin: (new Date()).toISOString(),
//      maxResults: 10,
//      singleEvents: true,
//      orderBy: 'startTime'
//    }, function(err, response) {
//      if (err) {
//        console.log('The API returned an error: ' + err);
//        return;
//      }
//      var events = response.items;
//      if (events.length == 0) {
//        console.log('No upcoming events found.');
//      } else {
//        console.log('Upcoming 10 events:');
//        for (var i = 0; i < events.length; i++) {
//          var event = events[i];
//          var start = event.start.dateTime || event.start.date;
//          console.log('%s - %s', start, event.summary);
//        }
//      }
//    });
//   }
// })













module.exports = router;


