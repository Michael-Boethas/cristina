module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      register: false, // Disable user registration
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          transformation: [{ flags: 'fl_sanitize' }], // Adds sanitize flag
          resource_type: "auto", // Allows images, PDFs, videos, etc.
        },
        delete: {},
      },
    },
  },
  documentation: {
    enabled: true,
  },
});


