import { google } from 'googleapis';
import credentials from "../service_account.json";

export default function getClient({ scopes }) {

    return google.auth.getClient({
      credentials: credentials,
      scopes: scopes,
    });
};