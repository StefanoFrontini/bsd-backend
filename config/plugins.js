module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  },
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("ZOHO_SMTP"),
      port: env("SMTP_PORT", 587),
      auth: {
        user: env("ZOHO_USER"),
        pass: env("ZOHO_PSW"),
      },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: "info@pilloledienergia.com",
      defaultReplyTo: "info@pilloledienergia.com",
    },
  },
});
