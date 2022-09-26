// If nothing in environment variables, will default back to local settings
const DEFAULT_BACKEND_DOMAIN = 'localhost';
const DEFAULT_BACKEND_URL = `http://${DEFAULT_BACKEND_DOMAIN}:1337`;
const DEFAULT_API_URL = `${DEFAULT_BACKEND_URL}/api`;
const USE_IMAGE_PROVIDER = false;

module.exports = {
  images: {
    domains: [
      process.env.BACKEND_DOMAIN || DEFAULT_BACKEND_DOMAIN,
      'res.cloudinary.com',
      'herokuapp.com',
      'localhost'
    ],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || DEFAULT_API_URL,
    BACKEND_URL: process.env.BACKEND_URL || (process.env.NODE_ENV === 'production' || USE_IMAGE_PROVIDER ? '' : DEFAULT_BACKEND_URL),
    NAME: 'Events Tailwind',
    BANK_ACCOUNT_NO: 'XX XXXX XXX XXXX XX',
    POSTAL_ADDRESS: 'P O Box 123, Example 1234',
    EMAIL: 'info@example.com',
    NEWSLETTER_URL: ''
  }
};
