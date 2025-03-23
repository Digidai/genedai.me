/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true, // 为了静态导出
  },
  basePath: '/genedai.me',
  assetPrefix: '/genedai.me/',
}

export default nextConfig; 