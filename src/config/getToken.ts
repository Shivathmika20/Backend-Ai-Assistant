import { google } from "googleapis";
import * as fs from "fs";
import * as readline from "readline";

const keys = JSON.parse(fs.readFileSync("src/config/oauth-client.json", "utf8"));

const oauth2Client = new google.auth.OAuth2(
    keys.installed.client_id,
    keys.installed.client_secret,
    "urn:ietf:wg:oauth:2.0:oob"
);

const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/documents"
    ]
});

console.log("Visit this URL:", url);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter the code: ", async (code) => {
    const { tokens } = await oauth2Client.getToken(code);
    console.log("Your refresh token:", tokens.refresh_token);
    rl.close();
});