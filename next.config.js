/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Old multi-page routes now live as sections on the home page
  async redirects() {
    return ["experience", "skills", "projects", "certifications"].map((s) => ({
      source: `/${s}`,
      destination: `/#${s}`,
      permanent: true,
    }));
  },
};

module.exports = nextConfig;
