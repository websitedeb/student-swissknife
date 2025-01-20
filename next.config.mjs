/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { 
      unoptimized: true 
    },
    pwa: {
      dest: 'public',
      register: true, 
      skipWaiting: true,
    },
    reactStrictMode: true,
  };
  
  export default nextConfig;
  