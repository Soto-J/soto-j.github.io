import { google } from "googleapis";

export function getGoogleDrive() {
  const auth = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
  );

  auth.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  return google.drive({ version: "v3", auth });
}
