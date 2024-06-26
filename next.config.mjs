/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add a dynamic route for the update page
  async rewrites() {
    return [
      {
        source: "/update/:postId",
        destination: "/update/[postId]",
      },
    ];
  },
};

export default nextConfig;
