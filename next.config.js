/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  // NO experimental.ppr – נמנע משגיאות build ב-Netlify
  // נוסיף חזרה כשNetlify יתמוך במלואה בסטביל
};

module.exports = nextConfig;
