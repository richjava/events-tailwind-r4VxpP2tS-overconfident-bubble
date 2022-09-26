import sendEmail from "./email/send-email";
import addToCol from "./lib/add-to-col";
import {getSubscribeOrgEmail} from "./email/getEmail";
import {getSubscribeUserEmail} from "./email/getEmail";

export default async function handler(req, res){
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const donationAmount = req.body.donationAmount || 0;
    const subscriptionType = req.body.subscriptionType;
    const subscriptionFee = req.body.subscriptionFee;
    const partnerName = req.body.partnerName;
    const partnerEmail = req.body.partnerEmail;
    const partnerPhone = req.body.partnerPhone;

    let emailConfig = {
      lastName: lastName,
      firstName: firstName,
      partnerName: partnerName,
      subscriptionType: subscriptionType,
      status: "Pending payment",
      paymentDate: "",
      subscriptionFee: subscriptionFee,
      donationAmount: donationAmount,
      email: email,
      partnerEmail: partnerEmail,
      phone: phone,
      partnerPhone: partnerPhone
    }
    const sheetsRes = await addToCol("Sheet1!A1:L1", emailConfig, process.env.SUBSRIPTIONS_SPREADSHEET_ID);
    let subscribeOrgEmail = await getSubscribeOrgEmail(emailConfig);
    await sendEmail(subscribeOrgEmail);
    let subscribeUserEmail = await getSubscribeUserEmail(emailConfig);
    sendEmail(subscribeUserEmail).then(
      () => {
        res.status(200).json({
          statusCode: 200,
          body: JSON.stringify({ success: true })
        });
      },
      msg => {
        res.status(422).json({
          statusCode: 422,
          body: JSON.stringify({
            success: false,
            message: msg
          })
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      statusCode: 500,
      body: JSON.stringify(err.message)
    });
  }
};
