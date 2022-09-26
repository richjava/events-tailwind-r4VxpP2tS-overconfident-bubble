import { google } from 'googleapis';
import getClient from "./get-client";

export default async function authorizeSheets() {
    const client = await getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    return google.sheets({
      version: "v4",
      auth: client,
    });
  };