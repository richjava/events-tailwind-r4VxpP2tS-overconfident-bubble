import sendEmail from "./email/send-email";
import {getContactOrgEmail} from "./email/getEmail";

export default async function handler(req, res) {
  try {
    let emailConfig = req.body;
    let contactOrgEmail = await getContactOrgEmail(emailConfig);
    sendEmail(contactOrgEmail).then(
      () => {
        res.status(200).json({
          statusCode: 200,
          body: JSON.stringify({
            success: true
          }),
        });
      },
      msg => {
        res.status(422).json({
          statusCode: 422,
          body: JSON.stringify({
            success: false,
            message: msg
          }),
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      statusCode: 500,
      body: JSON.stringify(err),
    });
  }
}
