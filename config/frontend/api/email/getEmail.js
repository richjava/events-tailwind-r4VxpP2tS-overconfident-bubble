const EmailManager = require('./EmailManager');

let emailConfig = {
  from: {
    email: process.env.FROM_EMAIL,
    name: process.env.NAME,
  }
};

export async function getContactOrgEmail(args) {
  emailConfig.html = EmailManager.getContactEmailHtml(args);
  emailConfig.to = process.env.FROM_EMAIL;
  emailConfig.subject = "New enquiry";
  return emailConfig;
}

export async function getDonateOrgEmail(args) {
  emailConfig.html = EmailManager.getDonateOrgEmailHtml(args);
  emailConfig.to = process.env.FROM_EMAIL;
  emailConfig.subject = "New donation"
  return emailConfig;
}

export async function getDonateUserEmail(args) {
  emailConfig.html = EmailManager.getDonateUserEmailHtml(args);
  emailConfig.to = args.email;
  emailConfig.subject = `Your donation to ${process.env.NAME}`;
  return emailConfig;
}

export async function getSubscribeOrgEmail(args) {
  emailConfig.html = EmailManager.getSubscribeOrgEmailHtml(args);
  emailConfig.to = process.env.FROM_EMAIL;
  emailConfig.subject = "New subscription";
  return emailConfig;
}

export async function getSubscribeUserEmail(args) {
  emailConfig.html = EmailManager.getSubscribeUserEmailHtml(args);
  emailConfig.to = args.email;
  emailConfig.subject = `Your ${process.env.NAME} subscription`;
  return emailConfig;
}
