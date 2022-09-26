import authorizeSheets from "./authorize-sheets";

export default async function addToCol(range, data, spreadsheetId){
    const sheets = await authorizeSheets();
    return new Promise((resolve, reject) => {
      sheets.spreadsheets.values.append(
        {
          spreadsheetId: spreadsheetId,
          range: range,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [Object.values(data)],
          },
        },
        (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        }
      );
    });
  };