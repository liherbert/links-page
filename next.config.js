/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/./",
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     unoptimized: true,
//   },
// };
